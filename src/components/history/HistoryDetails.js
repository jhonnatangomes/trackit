import {
    Title,
    HistoryDetailsContainer,
    Habit,
    ConcludedTitle,
    UnconcludedTitle,
    HabitsList,
} from "./historyStyle";
import dayjs from "dayjs";

export default function HistoryDetails({ dayClicked }) {
    let customParseFormat = require("dayjs/plugin/customParseFormat");
    dayjs.extend(customParseFormat);
    const day = dayjs(dayClicked.day, "DD/MM/YYYY").format("DD");
    const doneHabits = dayClicked.habits.filter((habit) => habit.done);
    const undoneHabits = dayClicked.habits.filter((habit) => !habit.done);

    return (
        <HistoryDetailsContainer dayClicked={dayClicked}>
            <Title>Hábitos do dia {day}</Title>
            {doneHabits.length ? (
                <Habit>
                    <ConcludedTitle>Concluídos</ConcludedTitle>
                    <HabitsList>
                        {doneHabits.map((habit) => (
                            <p>{habit.name}</p>
                        ))}
                    </HabitsList>
                </Habit>
            ) : (
                ""
            )}
            {undoneHabits.length ? (
                <Habit>
                    <UnconcludedTitle>Não concluídos</UnconcludedTitle>
                    <HabitsList>
                        {undoneHabits.map((habit) => (
                            <p>{habit.name}</p>
                        ))}
                    </HabitsList>
                </Habit>
            ) : (
                ""
            )}
        </HistoryDetailsContainer>
    );
}
