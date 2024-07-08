import React, { useState } from "react";

import "./addForm.css";
import { AddFormConst } from "../../constants/Constants";

const AddForm = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [salary, setSalary] = useState("");

	const onValueChange = (e) => {
		const { name, value } = e.target;
		if (name === "name") {
			setName(value);
		} else if (name === "salary") {
			setSalary(value);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (name.length < 3 || !salary) return;
		onAdd(name, salary);
		setName("");
		setSalary("");
	};

	return (
		<div className="app-add-form">
			<h3>{AddFormConst.AddNewEmployee}</h3>
			<form className="add-form d-flex" onSubmit={onSubmit}>
				<input
					type="text" //
					className="form-control new-post-label"
					placeholder={AddFormConst.AddNewPlaceholder}
					name="name"
					value={name}
					onChange={onValueChange}
				/>
				<input
					type="number" //
					className="form-control new-post-label"
					placeholder={AddFormConst.PricePlaceholder}
					name="salary"
					value={salary}
					onChange={onValueChange}
				/>
				<button type="submit" className="btn btn-outline-light">
					{AddFormConst.AddButtonForm}
				</button>
			</form>
		</div>
	);
};

export default AddForm;
