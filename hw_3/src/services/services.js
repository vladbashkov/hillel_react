const API = `https://6257d6810c918296a48bd781.mockapi.io/boards/employee`;

const service = {
	get: async (id) => {
		try {
			const response = await fetch(id ? `${API}/${id}` : API);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			return data;
		} catch (err) {
			console.error("Error fetching data: ", err);
		}
	},
	put: async (id, obj) => {
		try {
			const response = await fetch(`${API}/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(obj),
			});
			if (!response.ok) {
				throw new Error("Failed to update task");
			}
			const data = await response.json();
			return data;
		} catch (err) {
			console.error("Error updating task: ", err);
		}
	},
	patch: async (id, obj) => {
		try {
			const response = await fetch(`${API}/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(obj),
			});
			if (!response.ok) {
				throw new Error("Failed to patch task");
			}
			const data = await response.json();
			return data;
		} catch (err) {
			console.error("Error patching task: ", err);
		}
	},
	delete: async (id) => {
		try {
			const response = await fetch(`${API}/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Failed to delete task");
			}
			const data = await response.json();
			return data;
		} catch (err) {
			console.error("Error deleting task: ", err);
		}
	},
	post: async (obj) => {
		try {
			const response = await fetch(API, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(obj),
			});
			if (!response.ok) {
				throw new Error("Failed to create task");
			}
			const data = await response.json();
			return data;
		} catch (err) {
			console.error("Error creating task: ", err);
		}
	},
};

export default service;
