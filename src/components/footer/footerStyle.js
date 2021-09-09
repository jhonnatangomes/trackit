import styled from "styled-components";

const FooterStyle = styled.footer`
    width: 100%;
    height: 70px;
    padding: 0 31px 0 36px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    line-height: 22px;
`;

const Span = styled.span`
    color: #52b6ff;
    cursor: pointer;
`;

const Circle = styled.div`
    width: 91px;
    height: 91px;
    background: #52b6ff;
    border-radius: 50%;
    margin-bottom: 40px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ProgressDiv = styled.div`
    width: 79px;
    height: 79px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

export { FooterStyle, Span, Circle, ProgressDiv };
