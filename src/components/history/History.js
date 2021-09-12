import Header from "../header/Header";
import Footer from "../footer/Footer";
import HistoryDetails from "./HistoryDetails";
import { CalendarContainer, Title } from "./historyStyle";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import LoginContext from "../../contexts/LoginContext";
import axios from "axios";
import dayjs from "dayjs";

export default function History() {
    const login = useContext(LoginContext);
    const history = useHistory();
    const [habitHistory, setHabitHistory] = useState([]);
    const [dayClicked, setDayClicked] = useState(null);

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
            })
            .catch((err) => {
                if (err.response.data.message === "Token inválido!") {
                    alert("Você não está logado!");
                    history.push("/");
                }
            });
    }, []);

    function returnClassName(date) {
        for (let element of habitHistory) {
            if (
                element.day === dayjs(date).format("DD/MM/YYYY") &&
                element.day !== dayjs().format("DD/MM/YYYY")
            ) {
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

    function clickDay(value) {
        const day = habitHistory.find(
            (habit) => habit.day === dayjs(value).format("DD/MM/YYYY")
        );
        if (dayClicked !== day && day !== undefined) {
            setDayClicked(day);
        } else {
            setDayClicked(null);
        }
    }

    return (
        <>
            <Header />
            <main>
                <Title>Histórico</Title>
                <CalendarContainer>
                    <Calendar
                        className="calendar"
                        calendarType="US"
                        tileClassName={({ activeStartDate, date, view }) => {
                            return returnClassName(date);
                        }}
                        locale="pt-BR"
                        onChange={(value, event) => clickDay(value)}
                    />
                </CalendarContainer>
                {dayClicked !== null ? (
                    <HistoryDetails dayClicked={dayClicked} />
                ) : (
                    ""
                )}
            </main>
            <Footer />
        </>
    );
}
