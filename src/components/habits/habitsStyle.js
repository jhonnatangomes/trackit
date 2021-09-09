import styled from "styled-components";

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 29px;
`;

const MyHabits = styled.span`
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
`;

const PlusButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63px;
    color: white;
    font-size: 27px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoHabitsYet = styled.p`
    font-size: 18px;
    line-height: 22px;
    margin-top: 28px;
    color: #666666;
`;

const HabitStyle = styled.div`
    width: 100%;
    height: 91px;
    background: white;
    font-size: 20px;
    border-radius: 5px;
    color: #666666;
    padding: 13px 0 15px 14px;
    position: relative;

    p {
        margin-bottom: 8px;
    }

    &:nth-child(2) {
        margin-top: 20px;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    img {
        position: absolute;
        right: 10px;
        top: 11px;
        cursor: pointer;
    }
`;

const Days = styled.div`
    display: flex;

    div:not(:last-child) {
        margin-right: 4px;
    }
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid
        ${({ days, id }) => (days.includes(id) ? "#cfcfcf" : "#d5d5d5")};
    background: ${({ days, id }) => (days.includes(id) ? "#cfcfcf" : "white")};
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ days, id }) => (days.includes(id) ? "white" : "#dbdbdb")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const CreateHabitStyle = styled.div`
    width: 100%;
    height: 180px;
    background: white;
    border-radius: 5px;
    padding: 18px 18px 15px 19px;
    margin: 20px 0;
    position: relative;

    input {
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-size: 20px;
        outline: none;
        width: 100%;
        height: 45px;
        padding-left: 11px;
        margin-bottom: 8px;
    }

    input::placeholder {
        font-family: "Lexend Deca", sans-serif;
        color: #dbdbdb;
    }

    input:disabled {
        background: #f2f2f2;
        cursor: not-allowed;
    }

    button:nth-child(3) {
        position: absolute;
        bottom: 23px;
        right: 123px;
        width: 69px;
        height: 20px;
        font-size: 16px;
        color: #52b6ff;
        background: white;
        border: none;
    }

    button:last-child {
        position: absolute;
        bottom: 15px;
        right: 16px;
        width: 84px;
        height: 35px;
        background: #52b6ff;
        border-radius: 4.63px;
        border: none;
        color: white;
        font-size: 16px;
    }

    button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export {
    MyHabits,
    TitleContainer,
    PlusButton,
    NoHabitsYet,
    HabitStyle,
    Days,
    Day,
    CreateHabitStyle,
};
