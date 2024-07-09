import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchUserData } from "../services/services";

const User = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetchUserData(id)
			.then((data) => {
				console.log(data);
				setUser(data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, [id]);

	if (!user) {
		return <div>Завантаження...</div>;
	}

	return (
		<div className="user">
			<h1>Деталі користувача</h1>
			{user.name && (
				<p>
					<strong>Ім'я:</strong> {user.name}
				</p>
			)}
			{user.username && (
				<p>
					<strong>Username:</strong> {user.username}
				</p>
			)}
			{user.email && (
				<p>
					<strong>Email:</strong> {user.email}
				</p>
			)}
			{user.phone && (
				<p>
					<strong>Телефон:</strong> {user.phone}
				</p>
			)}
			{user.website && (
				<p>
					<strong>Веб-сайт:</strong> {user.website}
				</p>
			)}
			{user.company && user.company.name && (
				<p>
					<strong>Компанія:</strong> {user.company.name}
				</p>
			)}
			{user.address && user.address.street && user.address.city && (
				<p>
					<strong>Адреса:</strong> {user.address.street}, {user.address.city}
				</p>
			)}
		</div>
	);
};

export default User;
