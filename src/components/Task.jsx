import React from "react";
import "./css/Task.css";

const Task = ({title, completed, onClick}) => {
	return (
		<div
			className="task"
			style={completed ? {borderLeft: "20px solid #12cf67"} : {borderLeft: "20px solid #cf122b"}}
			onClick={onClick}>
			<p>{title}</p>
		</div>
	)
};

export default Task;