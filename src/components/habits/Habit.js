import { HabitStyle, Days, Day } from "./habitsStyle";
import deleteButton from "../../assets/delete.png";

export default function Habit({days, name, weekdays}) {
    return (
        <HabitStyle>
            <p>{name}</p>
            <Days>
                {weekdays.map((weekday, i) => (
                    <Day days={days} id={i + 1} key={i}>
                        {weekday}
                    </Day>
                ))}
            </Days>
            <img src={deleteButton} alt=""/>
        </HabitStyle>
    );
}
