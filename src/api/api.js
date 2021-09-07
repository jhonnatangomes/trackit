import {habits, habitsToday} from "../data/habits";

function getHabits(){
    return habits;
}

function getHabitsToday(){
    return habitsToday;
}

const exportedObject = {getHabits, getHabitsToday};

export default exportedObject;