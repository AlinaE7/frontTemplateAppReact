import React, { useState, useEffect } from 'react';
import AddButton from '../components/ButtonAddBrand.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const onDelete = (id) => {
  console.log('Attempt to Delete item with id', id);
  // Implement your delete logic here
};


const Brand = () => {
  const [brands, setBrands] = useState([]);

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

  return (
    <div className="StandardPadding">
      <h1 className="text-2xl font-bold mb-4">List of Brands</h1>
      <ul className="list-none">
        {brands.map(brand => (
          <li key={brand.ID} className="w-48 px-4 py-2 mb-2 bg-white font-semibold rounded-lg shadow hover:bg-gray-50 transition-colors duration-200">
            <div className='flex justify-between'>
            {brand.Name}
            <button
            onClick={() => onDelete(brand.id)}
            className="ml-2 text-gray-400 hover:text-red-500 focus:outline-none"
            aria-label={`Delete ${brand.Name}`}
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="text-sky-200"
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

