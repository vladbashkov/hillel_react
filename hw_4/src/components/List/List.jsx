import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchUserData } from "../services/services";

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUserData()
			.then((data) => {
				console.log(data);
				setUsers(data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	return (
		<div>
			<h1>Список користувачів</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link to={`/user/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
