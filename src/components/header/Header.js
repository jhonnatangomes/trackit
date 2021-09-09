import { HeaderStyle, Title, Profile } from "./headerStyle";
import LoginContext from "../../contexts/LoginContext";
import { useContext } from "react";

export default function Header() {
    const { image } = useContext(LoginContext);

    return (
        <HeaderStyle>
            <Title>TrackIt</Title>
            <Profile src={image} alt="" />
        </HeaderStyle>
    );
}
