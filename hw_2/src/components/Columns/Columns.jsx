import React, { useState, useEffect } from "react";
import "./Columns.scss";

import { STATUS_TO_DO, STATUS_IN_PROGRESS, STATUS_DONE } from "../../constants/Constants";
import service from "../../services/services";
import ColumnItem from "../ColumnItem/ColumnItem";

export const Columns = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		service
			.get()
			.then((data) => {
				setTasks(data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	// const changeStatusHandler = (taskId, newStatus) => {
	// 	setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)));
	// };

	// const deleteTaskHandler = (taskId) => {
	// 	setTasks(tasks.filter((task) => task.id !== taskId));
	// };

	const changeStatusHandler = (id, newStatus) => {
		setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)));
	};

	const deleteTaskHandler = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	return (
		<div className="Columns">
			<div className="task-board">
				<ColumnItem
					title={STATUS_TO_DO.text} //
					tasks={tasks.filter((task) => task.status === STATUS_TO_DO.number)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
				<ColumnItem
					title={STATUS_IN_PROGRESS.text} //
					tasks={tasks.filter((task) => task.status === STATUS_IN_PROGRESS.number)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
				<ColumnItem
					title={STATUS_DONE.text} //
					tasks={tasks.filter((task) => task.status === STATUS_DONE.number)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
			</div>
		</div>
	);
};

export default Columns;
