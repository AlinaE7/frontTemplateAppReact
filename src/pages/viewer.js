import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Viewer = () => {
    const [brand, setBrand] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      console.log("Fetching brand details...");
      fetch(`http://localhost:1256/getBrand/` + id)
        .then(response => {
          console.log("Response status:", response.status);
          return response.json();
        })
        .then(data => {
          console.log("Received brand data:", data);
          setBrand(data);
        })
        .catch(error => console.error('Error fetching brand details:', error));
    }, [id]);
  
    if (!brand) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="StandardPadding">

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl font-bold text-gray-900">Brand Details: {brand.Name}</h3>
          </div>
          <div className="border-t border-gray-200">
            {Object.entries(brand).map(([key, value]) => (
                <div className="grid grid-cols-[1fr,7fr] trashed-item">
                <React.Fragment key={key}>
                    <div className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-500">
                    {key}
                    </div>
                    <div class="trashed-item flex justify-between items-center">
                        <div className="bg-white px-4 py-3 text-sm text-gray-900">
                        {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
                        </div>
                        <div className='flex justify-end items-center space-x-4'>
                            <div className='trash-button text-sky-200 hover:text-red-200 focus:outline-none opacity-0 transition-opacity duration-200'>
                            <FontAwesomeIcon
                                icon={faPen}
                                size="lg"
                            />
                            </div>
                            <div className='trash-button pr-4 text-sky-200 hover:text-red-200 focus:outline-none opacity-0 transition-opacity duration-200'>
                            <FontAwesomeIcon
                                icon={faTrash}
                                size="lg"
                            />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                </div>
            ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default Viewer;
 // <h1 className="text-2xl font-bold mb-4">{brand.Name}</h1>