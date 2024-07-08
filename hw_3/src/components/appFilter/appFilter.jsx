import "./appFilter.css";
import { buttonsData } from "../../constants/Constants";

const AppFilter = (props) => {
	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const activeClass = active ? "btn-light" : "btn-outline-light";

		return (
			<button
				className={`btn ${activeClass}`} //
				type="button"
				key={name}
				onClick={() => props.onFilterSelect(name)}
			>
				{label}
			</button>
		);
	});

	return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
