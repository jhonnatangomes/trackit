let habits = [
    {
        id: 1,
        name: "Nome do hábito",
        days: [1, 3, 5],
    },
    {
        id: 2,
        name: "Nome do hábito 2",
        days: [1, 3, 4, 6],
    },
];

let habitsToday = [
    {
        id: 1,
        name: "Ler 1 capítulo de livro",
        done: false,
        currentSequence: 3,
        highestSequence: 5,
    },
    {
        id: 2,
        name: "Fazer abdominais",
        done: true,
        currentSequence: 3,
        highestSequence: 3,
    },
    {
        id: 3,
        name: "Ler 1 capítulo de livro",
        done: true,
        currentSequence: 1,
        highestSequence: 5,
    },
    {
        id: 4,
        name: "Comer abacate",
        done: true,
        currentSequence: 1,
        highestSequence: 5,
    },
];

export { habits, habitsToday };
