import { LoginPage, Input, Button, Span } from "./loginStyle";
import { useLocation, useHistory } from "react-router";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import Loader from "react-loader-spinner";
import axios from "axios";

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
                        disabled={disabled}
                    />
                    <Input
                        type="text"
                        placeholder="foto"
                        value={login.image}
                        onChange={(e) =>
                            setLogin({ ...login, image: e.target.value })
                        }
                        disabled={disabled}
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
                        axios
                            .post(
                                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                                loginObject
                            )
                            .then((res) => {
                                setLogin(res.data);
                                setDisabled(false);
                                history.push("/hoje");
                            })
                            .catch((err) => {
                                alert(err);
                                setDisabled(false);
                            });
                    }}
                    disabled={disabled}
                >
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
            ) : (
                <Button
                    onClick={() => {
                        setDisabled(true);
                        axios
                            .post(
                                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
                            )
                            .then((res) => setDisabled(false));
                    }}
                    disabled={disabled}
                >
                    {disabled ? (
                        <Loader
                            type="ThreeDots"
                            color="#ffffff"
                            height={45}
                            width={45}
                        />
                    ) : (
                        "Cadastrar"
                    )}
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
