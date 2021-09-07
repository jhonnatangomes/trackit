import { HeaderStyle, Title, Profile } from "./headerStyle";
import profile from "../../assets/profile.png";

export default function Header() {
    return (
        <HeaderStyle>
            <Title>TrackIt</Title>
            <Profile src={profile} alt=""/>
        </HeaderStyle>
    );
}
