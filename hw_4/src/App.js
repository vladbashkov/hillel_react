import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import UserList from "./components/List/List";
import UserDetail from "./components/User/User";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<UserList />} />
					<Route path="/user/:id" element={<UserDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
