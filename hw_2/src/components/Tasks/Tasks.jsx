import React from "react";

const Task = ({ task, changeStatus, deleteTask }) => {
	return (
		<div className="task">
			<span>{task.title}</span>
			{task.status === 0 && <button onClick={() => changeStatus(task.id, 1)}>In Progress</button>}
			{task.status === 1 && (
				<>
					<button onClick={() => changeStatus(task.id, 0)}>To Do</button>
					<button onClick={() => changeStatus(task.id, 2)}>Done</button>
				</>
			)}
			{task.status === 2 && (
				<>
					<button onClick={() => changeStatus(task.id, 1)}>In Progress</button>
					<button onClick={() => deleteTask(task.id)}>To Archive</button>
				</>
			)}
		</div>
	);
};

export default Task;
