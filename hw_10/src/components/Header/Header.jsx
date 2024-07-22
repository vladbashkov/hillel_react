import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useSelector } from "react-redux";
import { HeaderTitle, HeaderInputPlaceholder } from "../../constants/Constants";
import { useUser } from "../../context/UserContext";

const Header = () => {
	const { name } = useUser();
	const totalItems = useSelector((state) => state.cart.totalItems);

	return (
		<header className="header">
			<Link to="/" className="logo">
				{HeaderTitle}
			</Link>
			{name ? (
				<>
					<p>{name}</p>
					<Link to="/cart" className="cart-link">
						<button className="cart-button">
							<FaShoppingCart className="cart-icon" size={24} />
							{totalItems > 0 && <span className="cart-count">({totalItems})</span>}
						</button>
					</Link>
				</>
			) : (
				<form>
					<input placeholder={HeaderInputPlaceholder} />
				</form>
			)}
		</header>
	);
};

export default Header;
