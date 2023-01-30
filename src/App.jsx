import "./App.css";
import React from "react";
import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: v4(),
            title: "Tomar umaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassa",
            completed: true,
        },
        {
            id: v4(),
            title: "Tomar umaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassa",
            completed: true,
        },
    ]);

    function addTask(title) {
        const newTasks = [
            ...tasks,
            {
                id: v4(),
                title: title,
            },
        ];

        setTasks(newTasks);
    }

    function changeTaskStatus(id) {
        const newTasks = tasks.map((task) => {
			if (task.id === id)
				return { ...task, completed: !task.completed}

			return task;
        });

        setTasks(newTasks);
    }

    return (
        <div className="container">
            <AddTask onTaskAdd={addTask} />
            <TaskList tasks={tasks} onTaskChange={changeTaskStatus} />
        </div>
    );
}

export default App;
