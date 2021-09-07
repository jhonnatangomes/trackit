import { HabitStyle, Days, Day } from "./habitsStyle";

export default function Habit({days, name}) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

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
        </HabitStyle>
    );
}
