import MenuItem from "../MenuItem/MenuItem";

const MenuList = ({ list }) => {
	return (
		<div className="menu-list">
			<ul>
				{list.map((pizza) => (
					<MenuItem
						key={pizza.id} //
						item={pizza}
					/>
				))}
			</ul>
		</div>
	);
};

export default MenuList;
