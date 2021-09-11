import styled from "styled-components";

const Title = styled.span`
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
`;

const CalendarContainer = styled.div`
    margin-top: 11px;
    width: 100%;
    display: flex;
    justify-content: center;

    .calendar {
        border-radius: 10px;
    }

    .item {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    .red {
        background: #ea5766;
    }

    .green {
        background: #8cc654;
    }
`;

export { Title, CalendarContainer };
