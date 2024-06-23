const handleActivate = (index, setList) => {
	setList((prevList) => prevList.map((item, idx) => (idx === index ? { ...item, active: !item.active } : item)));
};

const handleDelete = (index, setList) => {
	setList((prevList) => prevList.filter((_, idx) => idx !== index));
};

export { handleActivate, handleDelete };
