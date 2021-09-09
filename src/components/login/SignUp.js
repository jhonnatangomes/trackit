import { LoginPage, Input, Button, Span } from "./loginStyle";
import { useHistory } from "react-router";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [login, setLogin] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
    });
    const history = useHistory();

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
            <Input
                type="text"
                placeholder="nome"
                value={login.name}
                onChange={(e) => setLogin({ ...login, name: e.target.value })}
                disabled={disabled}
            />
            <Input
                type="text"
                placeholder="foto"
                value={login.image}
                onChange={(e) => setLogin({ ...login, image: e.target.value })}
                disabled={disabled}
            />
            <Button
                onClick={() => {
                    setDisabled(true);
                    axios
                        .post(
                            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
                        )
                        .then(() => {
                            setDisabled(false);
                            history.push("/");
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
                    "Cadastrar"
                )}
            </Button>
            <Span onClick={() => history.push("/")}>
                Já tem uma conta? Faça login!
            </Span>
        </LoginPage>
    );
}
