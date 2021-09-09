import {
    HabitStyle,
    HabitInformation,
    DoneButton,
    ContainerDoneButton,
} from "./habitsTodayStyle";
import check from "../../assets/check.png";

export default function Habit({ habit }) {
    return (
        <HabitStyle>
            <HabitInformation>
                <p>{habit.name}</p>
                <p>
                    Sequência: {habit.currentSequence}{" "}
                    {habit.currentSequence > 1 ? "dias" : "dia"}
                </p>
                <p>
                    Seu recorde: {habit.highestSequence}{" "}
                    {habit.highestSequence > 1 ? "dias" : "dia"}
                </p>
            </HabitInformation>
            <ContainerDoneButton>
                <DoneButton done={habit.done}>
                    <img src={check} alt="" />
                </DoneButton>
            </ContainerDoneButton>
        </HabitStyle>
    );
}
