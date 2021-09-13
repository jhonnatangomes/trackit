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
            selectHabit("check", config);
        } else {
            selectHabit("uncheck", config);
        }
    }

    function selectHabit(select, config) {
        axios
            .post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${select}`,
                {},
                config
            )
            .then(() => {
                const newHabits = updateSelectedHabit(select);
                setHabits(newHabits);
                const habitsDone = newHabits.filter((e) => e.done);
                setProgress(
                    ((habitsDone.length / habits.length) * 100).toFixed(0)
                );
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    }

    function updateSelectedHabit(select) {
        let newHabits;
        if (select === "check") {
            newHabits = habits.map((e) =>
                e.id === habit.id
                    ? {
                          ...e,
                          done: true,
                          currentSequence: e.currentSequence + 1,
                          highestSequence:
                              e.highestSequence === e.currentSequence
                                  ? e.highestSequence + 1
                                  : e.highestSequence,
                      }
                    : e
            );
        } else {
            newHabits = habits.map((e) =>
                e.id === habit.id
                    ? {
                          ...e,
                          done: false,
                          currentSequence: e.currentSequence - 1,
                          highestSequence:
                              e.highestSequence === e.currentSequence
                                  ? e.highestSequence - 1
                                  : e.highestSequence,
                      }
                    : e
            );
        }
        return newHabits;
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
