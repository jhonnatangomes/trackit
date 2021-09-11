import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
    MyHabits,
    TitleContainer,
    PlusButton,
    NoHabitsYet,
} from "./habitsStyle";
import Habit from "./Habit";
import { useState, useContext, useEffect } from "react";
import CreateHabit from "./CreateHabit";
import LoginContext from "../../contexts/LoginContext";
import axios from "axios";
import { useHistory } from "react-router";

export default function Habits() {
    const login = useContext(LoginContext);
    const history = useHistory();
    const [habits, setHabits] = useState([]);
    const [createHabit, setCreateHabit] = useState(false);
    const [newHabitName, setNewHabitName] = useState("");
    const [days, setDays] = useState([]);
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${login.token}`,
            },
        };

        axios
            .get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                config
            )
            .then((res) => {
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
                <TitleContainer>
                    <MyHabits>Meus hábitos</MyHabits>
                    <PlusButton onClick={() => setCreateHabit(!createHabit)}>
                        +
                    </PlusButton>
                </TitleContainer>
                {createHabit ? (
                    <CreateHabit
                        weekdays={weekdays}
                        setCreateHabit={setCreateHabit}
                        habits={habits}
                        setHabits={setHabits}
                        newHabitName={newHabitName}
                        setNewHabitName={setNewHabitName}
                        days={days}
                        setDays={setDays}
                    />
                ) : (
                    ""
                )}
                {habits.length ? (
                    habits.map((habit) => (
                        <Habit
                            days={habit.days}
                            key={habit.id}
                            name={habit.name}
                            id={habit.id}
                            weekdays={weekdays}
                            habits={habits}
                            setHabits={setHabits}
                        />
                    ))
                ) : (
                    <NoHabitsYet>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um
                        hábito para começar a trackear!
                    </NoHabitsYet>
                )}
            </main>
            <Footer />
        </>
    );
}
