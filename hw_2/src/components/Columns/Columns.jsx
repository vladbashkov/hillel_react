import React from "react";
import Task from "../Tasks/Tasks";

const Column = ({ title, tasks, changeStatus, deleteTask }) => {
	return (
		<div className="column">
			<h2>{title}</h2>
			{tasks.map((task) => (
				<Task key={task.id} task={task} changeStatus={changeStatus} deleteTask={deleteTask} />
			))}
		</div>
	);
};

export default Column;
