import Header from "../header/Header";
import Footer from "../footer/Footer";
import { CalendarContainer, Title } from "./historyStyle";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import axios from "axios";
import dayjs from "dayjs";

export default function History() {
    const login = useContext(LoginContext);
    const [habitHistory, setHabitHistory] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${login.token}`,
            },
        };

        axios
            .get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
                config
            )
            .then((res) => {
                setHabitHistory(res.data);
            });
    }, []);

    function returnClassName(date) {
        for (let element of habitHistory) {
            if (element.day === dayjs(date).format("DD/MM/YYYY")) {
                const doneHabits = element.habits.filter((habit) => habit.done);
                if (doneHabits.length === element.habits.length) {
                    return "item green";
                } else {
                    return "item red";
                }
            }
        }
        return "item";
    }

    return (
        <>
            <Header />
            <main>
                <Title>Histórico</Title>
                <CalendarContainer>
                    <Calendar
                        tileClassName="blue"
                        className="calendar"
                        calendarType="US"
                        tileClassName={({ activeStartDate, date, view }) =>
                            returnClassName(date)
                        }
                        locale="pt-BR"
                    />
                </CalendarContainer>
            </main>
            <Footer />
        </>
    );
}
