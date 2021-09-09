import { CreateHabitStyle, Days, Day } from "./habitsStyle";
import { useState, useContext } from "react";
import axios from "axios";
import LoginContext from "../../contexts/LoginContext";
import Loader from "react-loader-spinner";

export default function CreateHabit({
    weekdays,
    setCreateHabit,
    habits,
    setHabits,
}) {
    const [habitName, setHabitName] = useState("");
    const [days, setDays] = useState([]);
    const login = useContext(LoginContext);
    const [disabled, setDisabled] = useState(false);

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
        setDisabled(true);
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
                setDisabled(false);
                setCreateHabit(false);
            });
    }

    return (
        <CreateHabitStyle>
            <input
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                disabled={disabled}
            />
            <Days>
                {weekdays.map((weekday, i) => (
                    <Day
                        days={days}
                        id={i}
                        key={i}
                        onClick={() => (disabled ? null : selectDay(i))}
                        disabled={disabled}
                    >
                        {weekday}
                    </Day>
                ))}
            </Days>
            <button onClick={() => setCreateHabit(false)} disabled={disabled}>
                Cancelar
            </button>
            <button onClick={createHabit} disabled={disabled}>
                {disabled ? (
                    <Loader
                        type="ThreeDots"
                        color="#ffffff"
                        height={35}
                        width={35}
                    />
                ) : (
                    "Salvar"
                )}
            </button>
        </CreateHabitStyle>
    );
}
