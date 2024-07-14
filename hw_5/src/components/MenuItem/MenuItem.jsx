import { Soldout } from "../../constants/Constants";

const MenuItem = ({ item }) => {
	return (
		<li className={`pizza ${item.soldOut ? "soldout" : ""}`} id={item.id}>
			<img src={item.imageUrl} className="pizza__image" alt={item.name} />
			<div className="pizza__info">
				<p className="pizza__name">{item.name}</p>
				{/* <div className="pizza__ingredients">
					{item.ingredients.map((ing, index) => (
						<p key={index} className="pizza__ingredient">
							{item.ingredients.length - 1 == index ? `${ing}` : `${ing},`}
						</p>
					))}
					<p className="pizza__ingredient">{item.ingredients.join(", ")}</p>
				</div> */}
				<p className="pizza__ingredients">{item.ingredients.join(", ")}</p>
				<div className="pizza__actions">
					<p className="pizza__price">{item.soldOut ? Soldout : `€${item.unitPrice}.00`}</p>
					{!item.soldOut && <button className="button">Add to cart</button>}
				</div>
			</div>
		</li>
	);
};

export default MenuItem;
