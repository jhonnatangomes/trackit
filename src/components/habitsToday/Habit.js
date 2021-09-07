import { HabitStyle, HabitInformation, DoneButton } from "./habitsTodayStyle";
import check from "../../assets/check.png";

export default function Habit({habit}) {
    return (
        <HabitStyle>
            <HabitInformation>
                <p>{habit.name}</p>
                <p>Sequência: {habit.currentSequence} {habit.currentSequence > 1 ? "dias" : "dia"}</p>
                <p>Seu recorde: {habit.highestSequence} {habit.highestSequence > 1 ? "dias" : "dia"}</p>
            </HabitInformation>
            <DoneButton done={habit.done}>
                <img src={check} alt="" />
            </DoneButton>
        </HabitStyle>
    );
}
