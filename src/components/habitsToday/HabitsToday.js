import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Day, PercentageDoneHabits } from "./habitsTodayStyle";
import api from "../../api/api";
import Habit from "./Habit";
import { useEffect, useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import axios from "axios";
import { useHistory } from "react-router";

export default function HabitsToday({ progress, setProgress }) {
    const date = new Date();
    const weekdays = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];
    const [habits, setHabits] = useState([]);
    const login = useContext(LoginContext);
    const history = useHistory();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${login.token}`,
            },
        };
        axios
            .get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                config
            )
            .then((res) => {
                const doneHabits = res.data.filter(
                    (habit) => habit.done === true
                );
                setProgress(
                    ((doneHabits.length / res.data.length) * 100).toFixed(0)
                );
                setHabits(res.data);
            })
            .catch((err) => {
                if (err.response.data.message === "Token inválido!") {
                    alert("Você não está logado!");
                    history.push("/");
                }
            });
    }, []);

    return (
        <>
            <Header />
            <main>
                <Day>
                    {weekdays[date.getDay()]},{" "}
                    {String(date.getDate()).padStart(2, "0")}/
                    {String(date.getMonth() + 1).padStart(2, "0")}
                </Day>
                <PercentageDoneHabits habits={habits}>
                    {progress > 0
                        ? `${progress}% dos hábitos concluídos`
                        : "Nenhum hábito concluído ainda"}
                </PercentageDoneHabits>
                {habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        habits={habits}
                        setHabits={setHabits}
                    />
                ))}
            </main>
            <Footer />
        </>
    );
}
