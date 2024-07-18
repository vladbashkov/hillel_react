import { useState } from "react";
import { useUser } from "../../context/UserContext";

import { LoginText } from "../../constants/Constants";

const Login = () => {
	const [name, setNameState] = useState("");
	const { setName } = useUser();
	const { title, accent, subtitle, placeholder, button } = LoginText;

	const handleSubmit = (e) => {
		e.preventDefault();
		setName(name);
	};

	return (
		<div className="wrapper">
			<main className="content">
				<h1 className="title">
					{title}
					<br />
					<span className="text-yellow">{accent}</span>
				</h1>
				<p className="sub-title">{subtitle}</p>
				<form className="login-form" onSubmit={handleSubmit}>
					<input type="text" placeholder={placeholder} value={name} onChange={(e) => setNameState(e.target.value)} />
					<button>{button}</button>
				</form>
			</main>
		</div>
	);
};

export default Login;
