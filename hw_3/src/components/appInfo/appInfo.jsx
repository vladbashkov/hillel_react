import "./appInfo.css";
import { AppInfoConst } from "../../constants/Constants";

const AppInfo = ({ listLength, increaseListLength }) => {
	return (
		<div className="app-info">
			<h1>{AppInfoConst.EmployeesListTitle}</h1>
			<h2>
				{AppInfoConst.EmployeesQuantity}: {listLength}
			</h2>
			<h2>
				{AppInfoConst.EmployeesBonus}: {increaseListLength}
			</h2>
		</div>
	);
};

export default AppInfo;
