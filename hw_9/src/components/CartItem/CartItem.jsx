import Button from "../Button/Button";
import { increment, decrement, deleteItem } from "../../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const handleDecrement = () => {
		dispatch(decrement(item.id));
	};

	const handleIncrement = () => {
		dispatch(increment(item.id));
	};

	const handleDelete = () => {
		dispatch(deleteItem(item.id));
	};

	return (
		<li className="cart_item">
			<div className="cart_item-info">
				<p>{item.qty}x</p>
				<h3>{item.name}</h3>
				<p className="cart_item-info--price">€{item.unitPrice * item.qty}</p>
			</div>
			<div className="buttons-container">
				<Button onClick={handleDecrement} className={item.qty === 1 ? "button single" : "button"}>
					-
				</Button>
				<span>{item.qty}</span>
				<Button onClick={handleIncrement} className="button">
					+
				</Button>
				<Button onClick={handleDelete} className="button">
					DELETE
				</Button>
			</div>
		</li>
	);
};

export default CartItem;
