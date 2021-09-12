import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Day, PercentageDoneHabits } from "./habitsTodayStyle";
import Habit from "./Habit";
import { useEffect, useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import axios from "axios";
import { useHistory } from "react-router";
import dayjs from "dayjs";

export default function HabitsToday({ progress, setProgress }) {
    const [habits, setHabits] = useState([]);
    const login = useContext(LoginContext);
    const history = useHistory();
    require("dayjs/locale/pt-br");
    dayjs.locale("pt-br");

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
                if (res.data.length) {
                    setProgress(
                        ((doneHabits.length / res.data.length) * 100).toFixed(0)
                    );
                }

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
                    {dayjs().format("dddd")}, {dayjs().format("DD")}/
                    {dayjs().format("MM")}
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
