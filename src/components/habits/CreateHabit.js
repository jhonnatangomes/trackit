import { CreateHabitStyle, Days, Day } from "./habitsStyle";
import { useState, useContext } from "react";
import axios from "axios";
import LoginContext from "../../contexts/LoginContext";

export default function CreateHabit({
    weekdays,
    setCreateHabit,
    habits,
    setHabits,
}) {
    const [habitName, setHabitName] = useState("");
    const [days, setDays] = useState([]);
    const login = useContext(LoginContext);

    function selectDay(i) {
        let newDays = [...days];
        if (days.includes(i)) {
            newDays = newDays.filter((day) => day !== i);
        } else {
            newDays.push(i);
        }
        setDays(newDays);
    }

    function createHabit() {
        const habit = {
            name: habitName,
            days,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${login.token}`,
            },
        };

        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                habit,
                config
            )
            .then((res) => {
                setHabits([...habits, res.data]);
                console.log(res.data);
            });
    }

    return (
        <CreateHabitStyle>
            <input
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
            />
            <Days>
                {weekdays.map((weekday, i) => (
                    <Day
                        days={days}
                        id={i}
                        key={i}
                        onClick={() => selectDay(i)}
                    >
                        {weekday}
                    </Day>
                ))}
            </Days>
            <button onClick={() => setCreateHabit(false)}>Cancelar</button>
            <button onClick={createHabit}>Salvar</button>
        </CreateHabitStyle>
    );
}
