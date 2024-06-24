import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./App.scss";
import { STATUS_TO_DO, STATUS_IN_PROGRESS, STATUS_DONE } from "./constants/Constants";
import { tasks as taskData } from "./data/mockData";
import { handleChangeStatus, handleDeleteTask } from "./utils/tasksUtils";
import Column from "./components/Columns/Columns";

function App() {
	// const [tasks, setTasks] = useState([]);
	const [tasks, setTasks] = useState(taskData);
	console.log("useEffect 0");

	useEffect(() => {
		// console.log("useEffect 1");
		// axios
		// 	.get("https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks")
		// 	.then((response) => {
		// 		setTasks(response.data);
		// 		console.log("useEffect 2");
		// 	})
		// 	.catch((error) => {
		// 		console.error("Error fetching data: ", error);
		// 	});
	}, []);

	useEffect(() => {}, [tasks]);

	const changeStatusHandler = handleChangeStatus(tasks, setTasks);
	const deleteTaskHandler = handleDeleteTask(tasks, setTasks);

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
