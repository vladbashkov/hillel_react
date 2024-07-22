import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart } from "../../redux/cartSlice/cartSlice";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((store) => store.cart);
	const { items, totalItems, totalPrice } = cart;

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="cart">
			<Link to="/" className="cart_link">
				← Back to menu
			</Link>
			<h2 className="cart_title">{totalItems ? `Your cart, ${totalItems}` : "Your cart is empty"}</h2>
			{totalItems > 0 && (
				<>
					<ul>
						{items.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</ul>
					<div className="cart_ordering">
						<h2 className="cart_ordering-text">Total Price: €{totalPrice}</h2>

						<Link to="/order/new" className="cart_link">
							<Button>ORDER PIZZAS</Button>
						</Link>
						<Button onClick={handleClearCart}>CLEAR CART</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
