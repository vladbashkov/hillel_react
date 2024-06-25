import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./App.scss";
import { STATUS_TO_DO, STATUS_IN_PROGRESS, STATUS_DONE } from "./constants/Constants";
// import { handleChangeStatus, handleDeleteTask } from "./utils/tasksUtils";
import Column from "./components/Columns/Columns";

// Локальна дата
import { tasks as taskData } from "./data/mockData";

function App() {
	// const [tasks, setTasks] = useState([]);
	const [tasks, setTasks] = useState(taskData);
	console.log("Rendering App component");

	// useEffect для дати з АРІ
	// useEffect(() => {
	// 	console.log("useEffect called for fetching tasks");
	// 	axios
	// 		.get("https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks")
	// 		.then((response) => {
	// 			setTasks(response.data);
	// 			console.log("Data fetched, setting tasks");
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching data: ", error);
	// 		});
	// }, []);

	// useEffect для локальної дати
	useEffect(() => {
		console.log("useEffect called for fetching local tasks");
	}, [tasks]);

	// Мій старий код 
	// const changeStatusHandler = handleChangeStatus(tasks, setTasks);
	// const deleteTaskHandler = handleDeleteTask(tasks, setTasks);

	const changeStatusHandler = (id, newStatus) => {
		setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)));
	};
	const deleteTaskHandler = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	return (
		<div className="App">
			<div className="task-board">
				<Column
					title={STATUS_TO_DO} //
					tasks={tasks.filter((task) => task.status === 0)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
				<Column
					title={STATUS_IN_PROGRESS} //
					tasks={tasks.filter((task) => task.status === 1)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
				<Column
					title={STATUS_DONE} //
					tasks={tasks.filter((task) => task.status === 2)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
			</div>
		</div>
	);
}

export default App;
