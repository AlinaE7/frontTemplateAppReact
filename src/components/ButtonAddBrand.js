import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const ButtonAddBrand = ({ section }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch(`http://localhost:1256/createBrand/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // Add this line
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
  
      const result = await response.json();
      console.log(`New ${section.toLowerCase()} added:`, result);
      return result;
    } catch (error) {
      console.error(`Error adding ${section.toLowerCase()}:`, error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    try {
      await sendDataToServer(data);
      console.log(`New ${section.toLowerCase()} submitted:`, data);
      closeModal();
      window.location.reload(); //Refresh the list
    } catch (error) {
      console.error(`Error submitting ${section.toLowerCase()}:`, error);
    }
  };

  const renderFormFields = () => {
      return  (
        <>
          <input
              {...register("name", { required: "Brand name is required" })}
              type="text"
              placeholder="Enter brand name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          <textarea
              {...register("shortdesc",  )}
              placeholder="Enter short description"
              className="mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              rows="4"
          />
        </>
      )
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
              <form onSubmit={handleSubmit(onSubmit)} className="mt-2 px-7 py-3">
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

export default ButtonAddBrand;