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
`

const Span = styled.span`
    font-size: 18px;
    color: #52b6ff;
`

const Circle = styled.div`
    width: 91px;
    height: 91px;
    background: #52b6ff;
    border-radius: 50%;
    margin-bottom: 40px;
    color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export {
    FooterStyle,
    Span,
    Circle
}