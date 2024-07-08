import React, { useState } from "react";

import { mockData } from "../../data/mockData";
import "./appRender.css";
import AppInfo from "../appInfo/appInfo";
import SearchPanel from "../searchPanel/searchPanel";
import AppFilter from "../appFilter/appFilter";
import List from "../List/List";
import AddForm from "../addForm/addForm";

const AppRender = () => {
	const [data, setData] = useState(mockData);
	const [term, setTerm] = useState("");
	const [filter, setFilter] = useState("all");
	let maxID = mockData.length + 1;

	const deleteItem = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: maxID++,
		};
		setData([...data, newItem]);
	};

	const onToggleProps = (id, props) => {
		setData(
			data.map((item) => {
				if (item.id === id) {
					return { ...item, [props]: !item[props] };
				}
				return item;
			})
		);
	};

	const onChangeSalary = (name, newSalary) => {
		setData(
			data.map((item) => {
				if (item.name === name && newSalary > 0) {
					return { ...item, salary: newSalary };
				}
				return item;
			})
		);
	};

	const searchEmp = (items, term) => {
		if (!term.length) return items;
		return items.filter((item) => item.name.indexOf(term) > -1);
	};

	const onUpdateSearch = (term) => {
		setTerm(term);
	};

	const filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThen1000":
				return items.filter((item) => item.salary >= 1000);
			default:
				return items;
		}
	};

	const onFilterSelect = (filter) => {
		setFilter(filter);
	};

	const listLength = data.length;
	const increaseListLength = data.filter((item) => item.increase).length;
	const visibleData = filterPost(searchEmp(data, term), filter);

	return (
		<div className="app">
			<AppInfo listLength={listLength} increaseListLength={increaseListLength} />

			<div className="search-panel">
				<SearchPanel onUpdateSearch={onUpdateSearch} />
				<AppFilter filter={filter} onFilterSelect={onFilterSelect} />
			</div>

			<List data={visibleData} onDelete={deleteItem} onToggleProps={onToggleProps} onChangeSalary={onChangeSalary} />

			<AddForm onAdd={addItem} />
		</div>
	);
};

export default AppRender;
