import React from "react";

import { STATUS_TO_DO, STATUS_IN_PROGRESS, STATUS_DONE, TO_ARCHIVE } from "../../constants/Constants";

const Task = ({ task, onChangeStatus, onDelete }) => {
	return (
		<div className="task">
			<span>{task.title}</span>
			{task.status === STATUS_TO_DO.number && <button onClick={() => onChangeStatus(task.id, STATUS_IN_PROGRESS.number)}>{STATUS_IN_PROGRESS.text}</button>}
			{task.status === STATUS_IN_PROGRESS.number && (
				<>
					<button onClick={() => onChangeStatus(task.id, STATUS_TO_DO.number)}>{STATUS_TO_DO.text}</button>
					<button onClick={() => onChangeStatus(task.id, STATUS_DONE.number)}>{STATUS_DONE.text}</button>
				</>
			)}
			{task.status === STATUS_DONE.number && (
				<>
					<button onClick={() => onChangeStatus(task.id, STATUS_IN_PROGRESS.number)}>{STATUS_IN_PROGRESS.text}</button>
					<button onClick={() => onDelete(task.id)}>{TO_ARCHIVE}</button>
				</>
			)}
		</div>
	);
};

export default Task;
