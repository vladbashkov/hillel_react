import "./App.css";
import List from "./components/List/List";
import { animals } from "./data/mockData";

function App() {
	return (
		<div className="App">
			<List list={animals} />
		</div>
	);
}

export default App;
