import React, { useState } from "react";

import { SearchPanelConst } from "../../constants/Constants";
import "./searchPanel.css";

const SearchPanel = ({ onUpdateSearch }) => {
	const [term, setTerm] = useState("");

	const handleUpdateSearch = (e) => {
		const term = e.target.value;
		setTerm(term);
		onUpdateSearch(term);
	};

	return (
		<input
			type="text" //
			className="form-control search-input"
			placeholder={SearchPanelConst.SearchPlaceholder}
			value={term}
			onChange={handleUpdateSearch}
		/>
	);
};

export default SearchPanel;
