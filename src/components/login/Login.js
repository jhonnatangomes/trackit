import { LoginPage, Input, Button, Span } from "./loginStyle";
import { useHistory } from "react-router";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Login({ setLogin }) {
    const history = useHistory();
    const login = useContext(LoginContext);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (localStorage.login) {
            setLogin(JSON.parse(localStorage.login));
            setDisabled(true);
            axios
                .post(
                    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                    JSON.parse(localStorage.login)
                )
                .then((res) => {
                    setLogin(res.data);
                    setDisabled(false);
                    history.push("/hoje");
                });
        } else {
            setLogin({
                email: "",
                password: "",
            });
        }
    }, []);

    function enter() {
        setDisabled(true);
        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                login
            )
            .then((res) => {
                setLogin(res.data);
                localStorage.setItem("login", JSON.stringify(login));
                setDisabled(false);
                history.push("/hoje");
            })
            .catch((err) => {
                treatError(err.response.data);
                setDisabled(false);
            });
    }

    function treatError(error) {
        if (error.details) {
            error.details.forEach((detail) => {
                switch (detail) {
                    case '"email" must be a valid email':
                        alert("Digite um email válido!");
                        break;
                    case '"email" is not allowed to be empty':
                        alert("O e-mail não pode estar vazio!");
                        break;
                    case '"password" is not allowed to be empty':
                        alert("A senha não pode estar vazia!");
                        break;
                    default:
                        break;
                }
            });
        } else {
            alert(error.message);
        }
    }

    return (
        <LoginPage>
            <img src={logo} alt="" />
            <Input
                type="text"
                placeholder="email"
                name="email-input"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                disabled={disabled}
                autoComplete="name"
            />
            <Input
                type="password"
                placeholder="senha"
                value={login.password}
                onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                }
                disabled={disabled}
            />
            <Button onClick={enter} disabled={disabled}>
                {disabled ? (
                    <Loader
                        type="ThreeDots"
                        color="#ffffff"
                        height={45}
                        width={45}
                    />
                ) : (
                    "Entrar"
                )}
            </Button>

            <Span onClick={() => history.push("/cadastro")}>
                Não tem uma conta? Cadastre-se
            </Span>
        </LoginPage>
    );
}
