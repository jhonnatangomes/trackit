import Header from "../header/Header";
import Footer from "../footer/Footer";
import { CalendarContainer, Title } from "./historyStyle";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function History() {
    return (
        <>
            <Header />
            <main>
                <Title>Histórico</Title>
                <CalendarContainer>
                    <Calendar />
                </CalendarContainer>
            </main>
            <Footer />
        </>
    );
}
