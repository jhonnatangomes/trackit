import styled from "styled-components";

const Main = styled.main`
    margin-top: 70px;
    margin-bottom: 80px;
    padding: 22px 18px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
`;

const MyHabits = styled.span`
    font-size: 23px;
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
`;

const NoHabitsYet = styled.span`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;

const HabitStyle = styled.div`
    width: 100%;
    height: 91px;
    background: white;
    font-size: 20px;
    color: #666666;
    padding: 13px 0 15px 14px;
    position: relative;

    p {
        margin-bottom: 8px;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const Days = styled.div`
    display: flex;

    div:not(:last-child) {
        margin-right: 4px;
    }
`

const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid ${({days, id}) =>  days.includes(id) ? "#cfcfcf" : "#d5d5d5"};
    background: ${ ({days, id}) =>  days.includes(id) ? "#cfcfcf" : "white"};
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ ({days, id}) =>  days.includes(id) ? "white" : "#dbdbdb"};
`

export { Main, MyHabits, TitleContainer, PlusButton, NoHabitsYet, HabitStyle, Days, Day };
