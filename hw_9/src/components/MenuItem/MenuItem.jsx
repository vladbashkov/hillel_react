import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../redux/cartSlice/cartSlice";
import Button from "../Button/Button";
import { Soldout } from "../../constants/Constants";

const MenuItem = ({ item }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, ingredients, id, unitPrice, soldOut } = item;

	const isInCart = useSelector((state) => state.cart.items.find((cartItem) => cartItem.id === id));

	const handleItemToCart = () => {
		dispatch(addItemToCart(item));
	};

	return (
		<li className={`pizza ${soldOut ? "soldout" : ""}`} id={id}>
			<img src={imageUrl} className="pizza__image" alt={name} />
			<div className="pizza__info">
				<p className="pizza__name">{name}</p>
				<p className="pizza__ingredients">{ingredients.join(", ")}</p>
				<div className="pizza__actions">
					<p className="pizza__price">{soldOut ? Soldout : `€${unitPrice}.00`}</p>
					{!soldOut && (
						<Button onClick={handleItemToCart} className="button">
							{isInCart ? "Add more" : "Add to cart"}
						</Button>
					)}
				</div>
			</div>
		</li>
	);
};

export default MenuItem;
