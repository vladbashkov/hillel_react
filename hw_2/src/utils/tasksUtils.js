export const changeStatus = (tasks, id, newStatus) => {
	return tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task));
};

export const deleteTask = (tasks, id) => {
	return tasks.filter((task) => task.id !== id);
};

export const handleChangeStatus = (tasks, setTasks) => (id, newStatus) => {
	setTasks((prevTasks) => changeStatus(prevTasks, id, newStatus));
};

export const handleDeleteTask = (tasks, setTasks) => (id) => {
	setTasks((prevTasks) => deleteTask(prevTasks, id));
};
