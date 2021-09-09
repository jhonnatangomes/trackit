import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Day, PercentageDoneHabits } from "./habitsTodayStyle";
import api from "../../api/api";
import Habit from "./Habit";
import { useEffect } from "react";

export default function HabitsToday({ setProgress }) {
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
    const habits = api.getHabitsToday();
    const doneHabits = habits.filter((habit) => habit.done === true);
    const percentageDone = ((doneHabits.length / habits.length) * 100).toFixed(
        0
    );

    useEffect(() => {
        setProgress(percentageDone);
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
                    {doneHabits.length
                        ? `${percentageDone}% dos hábitos concluídos`
                        : "Nenhum hábito concluído ainda"}
                </PercentageDoneHabits>
                {habits.map((habit) => (
                    <Habit key={habit.id} habit={habit} />
                ))}
            </main>
            <Footer />
        </>
    );
}
