import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/pages/Counter";
import NotFound from "./components/pages/NotFound";
import Homepage from "./components/pages/Homepage";
import Nav from "./components/modules/Nav";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
