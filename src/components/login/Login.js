import { LoginPage, Input, Button, Span } from "./loginStyle";
import { useLocation, useHistory } from "react-router";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import Loader from "react-loader-spinner";
import api from "../../api/api";

export default function Login({ setLogin }) {
    const path = useLocation().pathname;
    const history = useHistory();
    const login = useContext(LoginContext);
    const [disabled, setDisabled] = useState(false);

    return (
        <LoginPage>
            <img src={logo} alt="" />
            <Input
                type="text"
                placeholder="email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                disabled={disabled}
            />
            <Input
                type="text"
                placeholder="senha"
                value={login.password}
                onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                }
                disabled={disabled}
            />
            {path === "/cadastro" ? (
                <>
                    <Input
                        type="text"
                        placeholder="nome"
                        value={login.name}
                        onChange={(e) =>
                            setLogin({ ...login, name: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        placeholder="foto"
                        value={login.image}
                        onChange={(e) =>
                            setLogin({ ...login, image: e.target.value })
                        }
                    />
                </>
            ) : (
                ""
            )}
            {path === "/" ? (
                <Button
                    onClick={() => {
                        const loginObject = {
                            email: login.email,
                            password: login.password,
                        };
                        setDisabled(true);
                        api.signIn(loginObject, setLogin, setDisabled);
                    }}
                    disabled={disabled}
                >
                    {disabled ? (
                        <Loader
                            type="ThreeDots"
                            color="#ffffff"
                            height={70}
                            width={70}
                        />
                    ) : (
                        "Entrar"
                    )}
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        api.signUp(login);
                    }}
                >
                    Cadastrar
                </Button>
            )}
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
