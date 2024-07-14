import { pizzas } from "../../data/mockData";
import Header from "../Header/Header";
import Login from "../Login/Login";
import MenuList from "../MenuList/MenuList";
import { useUser } from "../../context/UserContext";

const AppRender = () => {
	const { name } = useUser();

	return (
		<div className="App">
			<Header />
			{name ? <MenuList list={pizzas} /> : <Login />}
		</div>
	);
};

export default AppRender;
