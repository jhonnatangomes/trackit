import { LoginPage, Input, Button, Span } from "./loginPage";
import { useLocation, useHistory } from "react-router";
import logo from "../../assets/logo.png";

export default function Login() {
    const path = useLocation().pathname;
    const history = useHistory();

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
                {path === "/" ? (
                    <p onClick={() => history.push("/cadastro")}>
                        Não tem uma conta? Cadastre-se
                    </p>
                ) : (
                    <p onClick={() => history.push("/")}>
                        Já tem uma conta? Faça login!
                    </p>
                )}
            </Span>
        </LoginPage>
    );
}
