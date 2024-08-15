import React, { useState, useEffect } from 'react';
import AddButton from '../components/ButtonAddBrand.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//import Viewer from './viewer.js';



const Brand = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate(); // a hook from the react-router-dom library.

  useEffect(() => {
    console.log("Fetching brands..."); // Add this log
    fetch('http://localhost:1256/getBrand/')
      .then(response => {
        console.log("Response status:", response.status); // Add this log
        return response.json();
      })
      .then(data => {
        console.log("Received data:", data); // Add this log
        setBrands(data);
      })
      .catch(error => console.error('Error fetching brands:', error));
  }, []);

  const onDelete = (id, name) => {
    console.log('Attempt to Delete item with id:', id, 'and name:', name);
    const isConfirmed = window.confirm(`Are you sure you want to delete the brand "${name}"?`);
    
    if (isConfirmed) {
      if (id === undefined) {
        console.error('Cannot delete item with undefined id');
        return;
      }
    
      fetch('http://localhost:1256/deleteBrand/' + id, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          console.log('Item deleted successfully');
          setBrands(prevBrands => prevBrands.filter(brand => brand.ID !== id));
        } else {
          console.error('Failed to delete item. Status:', response.status);
          return response.text();
        }
      })
      .then(errorText => {
        if (errorText) console.error('Error details:', errorText);
      })
      .catch(error => console.error('Fetch error:', error));
    }
  };

  const handleBrandClick = brandID => {
    navigate(`/brand/viewer/`+ brandID);
  };

  return (
    <div className="StandardPadding">
      <h1 className="text-2xl font-bold mb-4">List of Brands</h1>
      <ul className="list-none">
        {brands.map(brand => (
          <li key={brand.ID} className="trashed-item w-48 px-4 py-2 mb-2 bg-white font-semibold rounded-lg shadow hover:bg-gray-50 transition-colors duration-200">
            <div className='flex justify-between items-center'>
              <span 
                onClick={() => handleBrandClick(brand.ID)}
                className="cursor-pointer hover:text-blue-600"
              >
                {brand.Name}
              </span>
              <button
                onClick={() => onDelete(brand.ID, brand.Name)}
                className="trash-button ml-2 text-sky-200 hover:text-red-200 focus:outline-none opacity-0 transition-opacity duration-200"
                aria-label={`Delete ${brand.Name}`}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  size="lg"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <AddButton section="Brand"/>
    </div>
  );
};

export default Brand;

