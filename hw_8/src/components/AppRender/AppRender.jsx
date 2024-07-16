// import { pizzas } from "../../data/mockData";
import Header from "../Header/Header";
import Login from "../Login/Login";
import MenuList from "../MenuList/MenuList";

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
		<div className="App">
			<Header />
			{name ? <MenuList list={data} /> : <Login />}
		</div>
	);
};

export default AppRender;
