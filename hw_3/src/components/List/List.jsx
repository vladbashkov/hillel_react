import "./List.css";
import ListItem from "../listItem/listItem";

const List = ({ data, onDelete, onToggleProps, onChangeSalary }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<ListItem
				key={id} //
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute("data-toggle"))}
				onChangeSalary={onChangeSalary}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default List;
