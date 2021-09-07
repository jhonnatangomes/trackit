import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
    Main,
    MyHabits,
    TitleContainer,
    PlusButton,
    NoHabitsYet
} from "./habitsStyle";
import Habit from "./Habit";
import api from "../../api/api";

export default function Habits() {
    const habits = api.getHabits();
    
    return (
        <>
            <Header />
            <Main>
                <TitleContainer>
                    <MyHabits>Meus hábitos</MyHabits>
                    <PlusButton>+</PlusButton>
                </TitleContainer>
                {habits.length ? (
                    habits.map(habit => <Habit days={habit.days} key={habit.id} name={habit.name}/>)
                ) : (
                    <NoHabitsYet>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um
                        hábito para começar a trackear!
                    </NoHabitsYet>
                )}
            </Main>
            <Footer />
        </>
    );
}
