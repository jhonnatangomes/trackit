import styled from "styled-components";

const Day = styled.p`
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
`;
const PercentageDoneHabits = styled.span`
    font-size: 18px;
    line-height: 22px;
    color: ${({ habits }) =>
        habits.some((habit) => habit.done === true) ? "#8fc549" : "#bababa"};
`;

const HabitStyle = styled.div`
    width: 100%;
    background: white;
    padding: 13px 13px 12px 15px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;

    &:nth-child(3) {
        margin-top: 28px;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const HabitInformation = styled.div`
    display: flex;
    flex-direction: column;

    p:first-child {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
        width: calc(100% - 5px);
    }

    p:not(:first-child) {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

    p:nth-child(2) span {
        color: ${({ habit }) => (habit.done ? "#8fc549" : "#666666")};
    }

    p:nth-child(3) span {
        color: ${({ habit }) =>
            habit.currentSequence === habit.highestSequence &&
            habit.highestSequence !== 0
                ? "#8fc549"
                : "#666666"};
    }
`;

const ContainerDoneButton = styled.div`
    display: flex;
    max-height: 100%;
    align-items: center;
`;

const DoneButton = styled.button`
    min-width: 69px;
    height: 69px;
    background: ${({ done }) => (done ? "#8fc549" : "#ebebeb")};
    border: ${({ done }) => (done ? "none" : "1px solid #e7e7e7")};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    Day,
    PercentageDoneHabits,
    HabitStyle,
    HabitInformation,
    DoneButton,
    ContainerDoneButton,
};
