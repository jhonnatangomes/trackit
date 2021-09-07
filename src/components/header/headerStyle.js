import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 18px;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
`;

const Title = styled.span`
    color: white;
    font-size: 39px;
    font-family: 'Playball', cursive;
`
const Profile = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`

export { HeaderStyle, Title, Profile };
