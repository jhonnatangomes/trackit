import { CreateHabitStyle, Days, Day } from "./habitsStyle";

export default function CreateHabit({weekdays}) {
    return (
        <CreateHabitStyle>
            <input type="text" placeholder="nome do hábito" />
            <Days>
                {weekdays.map((weekday, i) => (
                    <Day days={[]} id={i + 1} key={i}>
                        {weekday}
                    </Day>
                ))}
            </Days>
            <button>Cancelar</button>
            <button>Salvar</button>
        </CreateHabitStyle>
    );
}
