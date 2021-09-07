import { LoginPage, Input, Button, Span } from "./loginPage";
import { useLocation } from "react-router";
import logo from "../../assets/logo.png";

export default function Login() {
    const path = useLocation().pathname;

    return (
        <LoginPage>
            <img src={logo} alt="" />
            <Input type="text" placeholder="email" />
            <Input type="text" placeholder="senha" />
            {path === "/cadastro" ? (
                <>
                    <Input type="text" placeholder="nome" />
                    <Input type="text" placeholder="foto" />
                </>
            ) : (
                ""
            )}
            <Button>{path === "/" ? "Entrar" : "Cadastrar"}</Button>
            <Span>
                {path === "/"
                    ? "Não tem uma conta? Cadastre-se"
                    : "Já tem uma conta? Faça login!"}
            </Span>
        </LoginPage>
    );
}
