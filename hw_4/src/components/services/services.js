const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUserData = async (id = "") => {
	const url = id ? `${API}/${id}` : API;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(id ? `Failed to fetch user with ID ${id}` : "Failed to fetch users");
		}
		return await response.json();
	} catch (error) {
		console.error(error.message);
		throw error;
	}
};
