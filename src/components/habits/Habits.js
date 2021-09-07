import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Main, MyHabits, TitleContainer, PlusButton, NoHabitsYet } from "./habitsStyle";

export default function Habits() {
    return (
        <>
            <Header />
            <Main>
                <TitleContainer>
                    <MyHabits>Meus hábitos</MyHabits>
                    <PlusButton>+</PlusButton>
                </TitleContainer>
                <NoHabitsYet>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsYet>
            </Main>
            <Footer />
        </>
    );
}
