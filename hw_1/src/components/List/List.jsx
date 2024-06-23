import React, { useState } from "react";
import ListItem from "./ListItem";
import { handleActivate, handleDelete } from "../../utils/clickFns";

export default function List({ list: propsList = [] }) {
	const [list, setList] = useState(propsList);

	return propsList.length ? (
		<ul>
			{list.map((item, index) => (
				<ListItem
					key={index} //
					index={index}
					item={item}
					handleActivate={(index) => handleActivate(index, setList)}
					handleDelete={(index) => handleDelete(index, setList)}
				/>
			))}
		</ul>
	) : null;
}
