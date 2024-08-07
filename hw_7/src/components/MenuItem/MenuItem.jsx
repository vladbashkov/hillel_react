import { useState } from "react";

import Button from "../Button/Button";
import { Soldout } from "../../constants/Constants";

const MenuItem = ({ item }) => {
	const [quantity, setQuantity] = useState(0);

	const handleAddToCart = () => setQuantity(1);

	const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);

	const handleDecrement = () => {
		if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
	};

	const handleDelete = () => setQuantity(0);

	return (
		<li className={`pizza ${item.soldOut ? "soldout" : ""}`} id={item.id}>
			<img src={item.imageUrl} className="pizza__image" alt={item.name} />
			<div className="pizza__info">
				<p className="pizza__name">{item.name}</p>
				<p className="pizza__ingredients">{item.ingredients.join(", ")}</p>
				<div className="pizza__actions">
					<p className="pizza__price">{item.soldOut ? Soldout : `€${item.unitPrice}.00`}</p>
					{!item.soldOut && (
						<>
							{quantity === 0 ? (
								<Button onClick={handleAddToCart} className="button">
									Add to cart
								</Button>
							) : (
								<div className="buttons-container">
									<Button onClick={handleDecrement} className={quantity === 1 ? "button single" : "button"}>
										-
									</Button>
									<span>{quantity}</span>
									<Button onClick={handleIncrement} className="button">
										+
									</Button>
									<Button onClick={handleDelete} className="button">
										DELETE
									</Button>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</li>
	);
};

export default MenuItem;
