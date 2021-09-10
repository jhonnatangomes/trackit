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

    function treatError(error) {
        if (error.details) {
            error.details.forEach((detail) => {
                switch (detail) {
                    case '"name" is not allowed to be empty':
                        alert("O nome não pode estar vazio!");
                        break;
                    case '"email" is not allowed to be empty':
                        alert("O e-mail não pode estar vazio!");
                        break;
                    case '"image" is not allowed to be empty':
                        alert("A imagem não pode estar vazia!");
                        break;
                    case '"password" is not allowed to be empty':
                        alert("A senha não pode estar vazia!");
                        break;
                    case '"email" must be a valid email':
                        alert("Digite um e-mail válido!");
                        break;
                    case '"image" must be a valid uri':
                        alert("Digite uma URL de imagem válida!");
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
                            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
                            login
                        )
                        .then(() => {
                            setDisabled(false);
                            history.push("/");
                        })
                        .catch((err) => {
                            treatError(err.response.data);
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
