import styled from "styled-components";

const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 68px;
`;

const Input = styled.input`
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    outline: none;
    width: 80.8%;
    height: 45px;
    padding-left: 11px;
    font-size: 20px;
    margin-bottom: 6px;

    &:nth-child(2) {
        margin-top: 32px;
    }

    &::placeholder {
        font-family: "Lexend Deca", sans-serif;
        color: #dbdbdb;
    }
`;

const Button = styled.button`
    width: 80.8%;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63px;
    border: none;
    font-size: 21px;
    color: white;
    margin-bottom: 25px;
`;

const Span = styled.span`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
    cursor: pointer;
`

export { LoginPage, Input, Button, Span };
