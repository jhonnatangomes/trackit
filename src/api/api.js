import { habits, habitsToday } from "../data/habits";
import axios from "axios";
import { useHistory } from "react-router-dom";
const URL_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function getHabits() {
    return habits;
}

function getHabitsToday() {
    return habitsToday;
}

function signUp(body, setDisabled) {
    axios.post(`${URL_API}/auth/sign-up`, body).then((res) => {
        setDisabled(false);
    });
}

function signIn(body, setLogin, setDisabled) {
    axios.post(`${URL_API}/auth/login`, body).then((res) => {
        setLogin(res.data);
        setDisabled(false);
    });
}

const api = { getHabits, getHabitsToday, signUp, signIn };

export default api;
