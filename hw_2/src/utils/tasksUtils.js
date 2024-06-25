import service from "../services/services";

export const changeStatus = (tasks, id, newStatus) => {
	return tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task));
};

export const deleteTask = (tasks, id) => {
	return tasks.filter((task) => task.id !== id);
};

export const handleChangeStatus = (tasks, setTasks) => async (id, newStatus) => {
	try {
		await service.put(id, { status: newStatus });
		setTasks((prevTasks) => changeStatus(prevTasks, id, newStatus));
	} catch (error) {
		console.error("Error updating task status: ", error);
	}
};

export const handleDeleteTask = (tasks, setTasks) => async (id) => {
	try {
		await service.delete(id);
		setTasks((prevTasks) => deleteTask(prevTasks, id));
	} catch (error) {
		console.error("Error deleting task: ", error);
	}
};
