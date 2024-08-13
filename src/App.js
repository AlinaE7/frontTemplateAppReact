import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import TopNavigation from './components/TopNavigation.js';
import Home from './pages/home.js';
import Brand from './pages/brand.js';
import Product from './pages/product.js';
import Template from './pages/template.js';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <TopNavigation />
        <Routes>
          <Route path="/brand" element={<Brand />} />
          <Route path="/product" element={<Product />} />
          <Route path="/template" element={<Template />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;