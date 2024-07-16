import { HeaderTitle, HeaderInputPlaceholder } from "../../constants/Constants";
import { useUser } from "../../context/UserContext";

const Header = () => {
	const { name } = useUser();

	return (
		<header className="header">
			<a className="logo" href="/">
				{HeaderTitle}
			</a>
			{name ? (
				<p>{name}</p>
			) : (
				<form>
					<input placeholder={HeaderInputPlaceholder} />
				</form>
			)}
		</header>
	);
};

export default Header;
