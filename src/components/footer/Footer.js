import { FooterStyle, Span, Circle, ProgressDiv } from "./footerStyle";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    return (
        <FooterStyle>
            <Link to="/habitos">
                <Span>Hábitos</Span>
            </Link>
            <Link to="/hoje">
                <Circle>
                    <ProgressDiv>
                        <CircularProgressbar
                            text="Hoje"
                            value={33}
                            styles={buildStyles({
                                pathColor: "#fff",
                                textColor: "#fff",
                                trailColor: "#52b6ff",
                                textSize: "22px",
                            })}
                        />
                    </ProgressDiv>
                </Circle>
            </Link>
            <Link to="/historico">
                <Span>Histórico</Span>
            </Link>
        </FooterStyle>
    );
}
