import { habits, habitsToday } from "../data/habits";
import axios from "axios";
const URL_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function getHabits() {
    return habits;
}

function getHabitsToday() {
    return habitsToday;
}

const api = { getHabits, getHabitsToday };

export default api;
