import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Pizza from './views/Pizza';
import Books from './views/Books';
import SingleBook from './views/SingleBook';

import Navbar from './components/Navbar';





const App = () => {
	return (
		<BrowserRouter>
		<Navbar />
			<main className ="container my-5">
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/pizza" element={<Pizza />} />
			<Route path="/books" element={<Books />} />
			<Route path="/books/:id" element={<SingleBook />} />
			<Route path='*' element={<h1>404 An error occured</h1>} />
			</Routes>
			</main> 
		</BrowserRouter>
	)
};

export default App;