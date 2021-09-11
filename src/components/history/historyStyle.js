import styled from "styled-components";

//48px to change each number in a same row, 50px on each column

const Title = styled.span`
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
`;

const CalendarContainer = styled.div`
    margin: 11px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .calendar {
        border-radius: 10px;
    }

    .item {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        position: relative;
    }

    .red {
        background: #ea5766;
    }

    .green {
        background: #8cc654;
    }
`;

const HistoryDetailsContainer = styled.div`
    display: ${({ dayClicked }) => (dayClicked !== "" ? "block" : "none")};
`;

const Habit = styled.div`
    width: 100%;
    padding: 15px;
    margin-top: 11px;
    background: white;
    border-radius: 5px;
`;

const ConcludedTitle = styled.p`
    color: #8fc549;
    font-size: 20px;
`;

const UnconcludedTitle = styled.p`
    color: #ea5766;
    font-size: 20px;
`;

const HabitsList = styled.div`
    margin-top: 10px;

    p:not(:last-child) {
        margin-bottom: 5px;
    }
`;

export {
    Title,
    CalendarContainer,
    HistoryDetailsContainer,
    Habit,
    ConcludedTitle,
    UnconcludedTitle,
    HabitsList,
};
