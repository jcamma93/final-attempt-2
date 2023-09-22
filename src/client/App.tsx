import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Pizza from './views/Pizza';
import Books from './views/Books';
import SingleBook from './views/SingleBook';
import Edit from './views/Edit';
import Create from './views/Create';
import Purchase from './views/Purchase';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';





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
			<Route path="/books/:id" element={<PrivateRoute><SingleBook /></PrivateRoute>} />
			<Route path="/books/:id/edit" element={<PrivateRoute><Edit /></PrivateRoute>} />
			<Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
			<Route path="/purchase" element={<PrivateRoute><Purchase /></PrivateRoute>} />
			<Route path='*' element={<h1>404 An error occured</h1>} />
			</Routes>
			</main> 
		</BrowserRouter>
	)
};

export default App;