import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

import "./css/AddTask.css";

const AddTask = ({onTaskAdd}) => {
	const [inputData, setInputData] = useState("");

	const handleInputChange = (e) => {
		setInputData(e.target.value);
	}

	const handleAddTaskClick = () => {
		onTaskAdd(inputData);
		setInputData("");
	}

	return (
		<div class="add-task-container">
			<Input placeholder="Insira a tarefa" onChange={handleInputChange} value={inputData}/>
			<Button onClick={handleAddTaskClick}>Adicionar</Button>
		</div>
	);
};

export default AddTask;