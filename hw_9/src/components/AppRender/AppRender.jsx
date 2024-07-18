import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Login from "../../pages/Login/Login";
import Menu from "../../pages/Menu/Menu";
import Cart from "../../pages/Cart/Cart";

import { useUser } from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";

const AppRender = () => {
	const { name } = useUser();
	const { data, isLoading, error } = useFetch("https://react-fast-pizza-api.onrender.com/api/menu");

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={name ? <Menu list={data} /> : <Login />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</Router>
	);
};

export default AppRender;
