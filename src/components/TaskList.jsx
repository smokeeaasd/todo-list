import Task from "./Task";
import "./css/TaskList.css";

const TaskList = ({tasks, onTaskChange}) => {
	return (
		<div className="task-list">
			{tasks.map(task => {
				return (
					<Task title={task.title} completed={task.completed} onClick={(() => {
						onTaskChange(task.id)
					})}/>
				)
			})}
		</div>
	)
}

export default TaskList;