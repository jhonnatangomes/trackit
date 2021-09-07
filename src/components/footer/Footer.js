import { FooterStyle, Span, Circle } from "./footerStyle";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <FooterStyle>
            <Link to="/habitos">
                <Span>Hábitos</Span>
            </Link>
            <Link to="/hoje">
                <Circle>Hoje</Circle>
            </Link>
            <Link to="/historico">
                <Span>Histórico</Span>
            </Link>
        </FooterStyle>
    );
}
