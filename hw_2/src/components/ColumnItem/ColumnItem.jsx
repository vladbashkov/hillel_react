import React from "react";
import Task from "../Tasks/Tasks";

const ColumnItem = ({ title, tasks, changeStatus, deleteTask }) => {
	return (
		<div className="column">
			<h2>{title}</h2>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onChangeStatus={changeStatus} onDelete={deleteTask} />
			))}
		</div>
	);
};

export default ColumnItem;
