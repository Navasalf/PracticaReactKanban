import { v4 as uuidv4 } from "uuid"


const mockData = [
    {
        id: uuidv4(),
        title: " 📁 por hacer",
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar Javascript"
            },
            {
                id: uuidv4(),
                title: "Estudiar Javascrihtml+csspt"
            },
            {
                id: uuidv4(),
                title: "Estudiar React"
            },
        ]
    },
    {
        id: uuidv4(),
        title: " 👨‍💻 en progreso",
        tasks: [
            {
                id: uuidv4(),
                title: "curso Javascript"
            },
            {
                id: uuidv4(),
                title: "curso Javascrihtml+csspt"
            },
            {
                id: uuidv4(),
                title: "curso React"
            },
        ]
    },
    {
        id: uuidv4(),
        title: " ✔️ completado",
        tasks: [
            {
                id: uuidv4(),
                title: "curso Javascript"
            },
            {
                id: uuidv4(),
                title: "curso Javascrihtml+csspt"
            },
            {
                id: uuidv4(),
                title: "curso React"
            },
        ]
    },
];

export default mockData
