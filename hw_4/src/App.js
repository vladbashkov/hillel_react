import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import List from "./components/List/List";
import User from "./components/User/User";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="/user/:id" element={<User />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
