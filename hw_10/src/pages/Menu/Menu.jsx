import MenuItem from "../../components/MenuItem/MenuItem";

const Menu = ({ list }) => {
	const { data } = list;

	return (
		<div className="menu-list">
			<ul>
				{data.map((pizza) => (
					<MenuItem
						key={pizza.id} //
						item={pizza}
					/>
				))}
			</ul>
		</div>
	);
};

export default Menu;
