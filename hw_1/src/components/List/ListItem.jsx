import React from "react";
import { renderItem } from "../../utils/render";
import Button from "../Button/Button";

import { LIST_ACTIVATE_BTN, LIST_DEACTIVATE_BTN } from "../../constants/ListActivate";
import { DELETE_BTN } from "../../constants/Delete";

export default function ListItem({ item, handleActivate, handleDelete, index }) {
	const baseStyle = { textAlign: "left" };
	const activeStyle = item.active ? { color: "green", fontWeight: "bold" } : {};
	const itemStyle = { ...baseStyle, ...activeStyle };

	return (
		<li style={itemStyle}>
			{renderItem(item)}
			<Button title={!item.active ? LIST_ACTIVATE_BTN : LIST_DEACTIVATE_BTN} handleClick={() => handleActivate(index)} />
			<Button title={DELETE_BTN} handleClick={() => handleDelete(index)} />
		</li>
	);
}
