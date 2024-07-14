import "./App.css";
import { UserProvider } from "./context/UserContext";
import AppRender from "./components/AppRender/AppRender";

function App() {
	return (
		<UserProvider>
			<AppRender />
		</UserProvider>
	);
}

export default App;
