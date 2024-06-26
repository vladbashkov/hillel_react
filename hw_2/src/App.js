import React, { useState, useEffect } from "react";

import "./App.scss";
import { STATUS_TO_DO, STATUS_IN_PROGRESS, STATUS_DONE } from "./constants/Constants";
import { handleChangeStatus, handleDeleteTask } from "./utils/tasksUtils";
import service from "./services/services";
import Column from "./components/Columns/Columns";

function App() {
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
