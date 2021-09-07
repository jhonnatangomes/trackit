import styled from "styled-components";

const Main = styled.main`
    margin-top: 70px;
    margin-bottom: 80px;
    padding: 22px 18px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MyHabits = styled.span`
    font-size: 23px;
    color: #126ba5;
`

const PlusButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63px;
    color: white;
    font-size: 27px;
    border: none;
`

const NoHabitsYet = styled.span`
    font-size: 18px;
    margin-top: 28px;
    line-height: 22px;
    color: #666666;
    display: inline-block;
`

export {
    Main,
    MyHabits,
    TitleContainer,
    PlusButton,
    NoHabitsYet
}