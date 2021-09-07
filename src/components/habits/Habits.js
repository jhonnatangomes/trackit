import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
    MyHabits,
    TitleContainer,
    PlusButton,
    NoHabitsYet
} from "./habitsStyle";
import Habit from "./Habit";
import api from "../../api/api";
import { useState } from "react";
import CreateHabit from "./CreateHabit";

export default function Habits() {
    const habits = api.getHabits();
    const [createHabit, setCreateHabit] = useState(false);
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    return (
        <>
            <Header />
            <main>
                <TitleContainer>
                    <MyHabits>Meus hábitos</MyHabits>
                    <PlusButton onClick={() => setCreateHabit(!createHabit)}>+</PlusButton>
                </TitleContainer>
                {createHabit ? <CreateHabit weekdays={weekdays}/> : ""}
                {habits.length ? (
                    habits.map((habit) => (
                        <Habit
                            days={habit.days}
                            key={habit.id}
                            name={habit.name}
                            weekdays={weekdays}
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
