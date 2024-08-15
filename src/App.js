import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import TopNavigation from './components/TopNavigation.js';
import Home from './pages/home.js';
import Brand from './pages/brand.js';
import Product from './pages/product.js';
import Template from './pages/template.js';
import Viewer from './pages/viewer.js';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(faTrash)

function useDocumentTitle() {
  const location = useLocation();
  
  React.useEffect(() => {
    switch(location.pathname) {
      case '/':
        document.title = 'Home';
        break;
      case '/brand':
        document.title = 'Brands';
        break;
      case '/product':
        document.title = 'Products';
        break;
      case '/template':
        document.title = 'Templates';
        break;
      case '/brand/viewer/':            // doesn't work!
        document.title = 'Viewer';
        break;
      default:
        document.title = 'My React App';
    }
  }, [location]);
}

const App = () => {
  useDocumentTitle();
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/" element={<Brand />} />
        <Route path="/brand/viewer/:id" element={<Viewer />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/template/" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;