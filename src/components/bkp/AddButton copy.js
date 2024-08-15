import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddButton = ({ section }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`New ${section.toLowerCase()} submitted:`, formData);
    // Here you would typically send this data to your backend or state management system
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const renderFormFields = () => {
    switch (section) {
      case 'Brand':
        return (
          <>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
              placeholder="Enter brand name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              name="shortdesc"
              value={formData.shortdesc || ''}
              onChange={handleInputChange}
              placeholder="Enter short description"
              className="mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </>
        );
      case 'Product':
        return (
          <>
            <input
              type="text"
              name="displayMPN"
              value={formData.displayMPN || ''}
              onChange={handleInputChange}
              placeholder="Enter product name"
              className="mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="text"
              name="sku"
              value={formData.sku || ''}
              onChange={handleInputChange}
              placeholder="Enter SKU"
              className="mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <input
              type="text"
              name="mpn"
              value={formData.mpn || ''}
              onChange={handleInputChange}
              placeholder="Enter MPN"
              className="mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </>
        );
      default:
        return <p>No form available for {section}</p>;
    }
  };

  return (
    <>
      <div className="fixed w-full bottom-0 flex justify-center items-center pb-4 pt-12">
        <button
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          onClick={openModal}
        >
          Add {section}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={closeModal}>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
               onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900 transition ease-in-out duration-150"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Add New {section}</h3>
              <form onSubmit={handleSubmit} className="mt-2 px-7 py-3">
                {renderFormFields()}
                <div className="items-center px-4 py-3">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sky-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    Submit {section}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;