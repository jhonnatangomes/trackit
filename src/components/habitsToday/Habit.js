import {
    HabitStyle,
    HabitInformation,
    DoneButton,
    ContainerDoneButton,
} from "./habitsTodayStyle";
import check from "../../assets/check.png";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import ProgressContext from "../../contexts/ProgressContext";
import axios from "axios";

export default function Habit({ habit, habits, setHabits }) {
    const login = useContext(LoginContext);
    const { setProgress } = useContext(ProgressContext);

    function select(done) {
        const config = {
            headers: {
                Authorization: `Bearer ${login.token}`,
            },
        };

        if (!done) {
            axios
                .post(
                    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,
                    {},
                    config
                )
                .then(() => {
                    const newHabits = habits.map((e) =>
                        e.id === habit.id
                            ? {
                                  ...e,
                                  done: true,
                                  currentSequence: e.currentSequence + 1,
                                  highestSequence: e.highestSequence + 1,
                              }
                            : e
                    );
                    setHabits(newHabits);
                    const habitsDone = newHabits.filter((e) => e.done);
                    setProgress(
                        ((habitsDone.length / habits.length) * 100).toFixed(0)
                    );
                });
        } else {
            axios
                .post(
                    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,
                    {},
                    config
                )
                .then(() => {
                    const newHabits = habits.map((e) =>
                        e.id === habit.id
                            ? {
                                  ...e,
                                  done: false,
                                  currentSequence: e.currentSequence - 1,
                                  highestSequence: e.highestSequence - 1,
                              }
                            : e
                    );
                    setHabits(newHabits);
                    const habitsDone = newHabits.filter((e) => e.done);
                    setProgress(
                        ((habitsDone.length / habits.length) * 100).toFixed(0)
                    );
                });
        }
    }

    return (
        <HabitStyle>
            <HabitInformation habit={habit}>
                <p>{habit.name}</p>
                <p>
                    Sequência:{" "}
                    <span>
                        {habit.currentSequence}{" "}
                        {habit.currentSequence !== 1 ? "dias" : "dia"}
                    </span>
                </p>
                <p>
                    Seu recorde:{" "}
                    <span>
                        {habit.highestSequence}{" "}
                        {habit.highestSequence !== 1 ? "dias" : "dia"}
                    </span>
                </p>
            </HabitInformation>
            <ContainerDoneButton>
                <DoneButton
                    done={habit.done}
                    onClick={() => select(habit.done)}
                >
                    <img src={check} alt="" />
                </DoneButton>
            </ContainerDoneButton>
        </HabitStyle>
    );
}
