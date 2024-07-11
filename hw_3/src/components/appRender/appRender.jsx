import React, { useEffect, useState } from "react";

import service from "../../services/services";
import "./appRender.css";
import { FilterConst } from "../../constants/Constants";

import AppInfo from "../appInfo/appInfo";
import SearchPanel from "../searchPanel/searchPanel";
import AppFilter from "../appFilter/appFilter";
import List from "../List/List";
import AddForm from "../addForm/addForm";

const AppRender = () => {
	const [data, setData] = useState([]);
	const [term, setTerm] = useState("");
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		service
			.get()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	const deleteItem = (id) => {
		service
			.delete(id)
			.then(() => {
				setData(data.filter((item) => item.id !== id));
			})
			.catch((error) => {
				console.error("Error deleting item: ", error);
			});
	};

	const addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
		};
		service
			.post(newItem)
			.then((newData) => {
				setData([...data, newData]);
			})
			.catch((error) => {
				console.error("Error adding item: ", error);
			});
	};

	const onToggleProps = (id, props) => {
		const itemToUpdate = data.find((item) => item.id === id);
		const updatedItem = { ...itemToUpdate, [props]: !itemToUpdate[props] };

		service
			.put(id, updatedItem)
			.then(() => {
				setData(
					data.map((item) => {
						if (item.id === id) {
							return updatedItem;
						}
						return item;
					})
				);
			})
			.catch((error) => {
				console.error("Error toggling item property: ", error);
			});
	};

	const onChangeSalary = (name, newSalary) => {
		const itemToUpdate = data.find((item) => item.name === name);
		if (itemToUpdate && newSalary > 0) {
			const updatedItem = { ...itemToUpdate, salary: newSalary };

			service
				.put(itemToUpdate.id, updatedItem)
				.then(() => {
					setData(
						data.map((item) => {
							if (item.name === name) {
								return updatedItem;
							}
							return item;
						})
					);
				})
				.catch((error) => {
					console.error("Error changing salary: ", error);
				});
		}
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
			case FilterConst.rise:
				return items.filter((item) => item.rise);
			case FilterConst.moreThen1000:
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
