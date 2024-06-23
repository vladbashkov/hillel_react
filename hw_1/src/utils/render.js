const renderItem = ({ type, icon }) => {
	if (!type && !icon) {
		return <>No data yet</>;
	} else {
		return (
			<>
				{icon ? icon : "Guess by type"} - {type ? type : "Guess by icon"}
			</>
		);
	}
};

export { renderItem };
