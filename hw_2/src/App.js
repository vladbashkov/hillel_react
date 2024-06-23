import React, { useState, useEffect } from "react";

import "./App.scss";
import { TO_DO, IN_PROGRESS, DONE } from "./constants/Constants";
import { tasks as taskData } from "./data/mockData";
import { handleChangeStatus, handleDeleteTask } from "./utils/tasksUtils";
import Column from "./components/Columns/Columns";

function App() {
	const [tasks, setTasks] = useState(taskData);

	useEffect(() => {}, [tasks]);

	const changeStatusHandler = handleChangeStatus(tasks, setTasks);
	const deleteTaskHandler = handleDeleteTask(tasks, setTasks);

	return (
		<div className="App">
			<div className="task-board">
				<Column
					title={TO_DO} //
					tasks={tasks.filter((task) => task.status === 0)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
				<Column
					title={IN_PROGRESS} //
					tasks={tasks.filter((task) => task.status === 1)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
				<Column
					title={DONE} //
					tasks={tasks.filter((task) => task.status === 2)}
					changeStatus={changeStatusHandler}
					deleteTask={deleteTaskHandler}
				/>
			</div>
		</div>
	);
}

export default App;
