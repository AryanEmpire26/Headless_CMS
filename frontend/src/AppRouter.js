import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Persons from './components/Persons';
import Orders from './components/Orders';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import './App.css'; // Import CSS file for styling
// Home page component
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Entity Management System</h1>
      <ul>
        <li><Link to="/persons">Person Page</Link></li>
        <li><Link to="/orders">Order Page</Link></li>
        <li><Link to="/locations">Location Page</Link></li>
        <li><Link to="/reviews">Review Page</Link></li>
      </ul>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
