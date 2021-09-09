import { HabitStyle, Days, Day } from "./habitsStyle";
import deleteButton from "../../assets/delete.png";
import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";

export default function Habit({ days, name, weekdays, id, habits, setHabits }) {
    const login = useContext(LoginContext);
    function deleteHabit() {
        let wantToDelete = window.confirm(
            "Você gostaria de deletar esse hábito?"
        );
        if (!wantToDelete) {
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${login.token}`,
            },
        };

        axios
            .delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                config
            )
            .then(setHabits(habits.filter((habit) => habit.id !== id)));
    }

    return (
        <HabitStyle>
            <p>{name}</p>
            <Days>
                {weekdays.map((weekday, i) => (
                    <Day days={days} id={i} key={i}>
                        {weekday}
                    </Day>
                ))}
            </Days>
            <img src={deleteButton} alt="" onClick={deleteHabit} />
        </HabitStyle>
    );
}
