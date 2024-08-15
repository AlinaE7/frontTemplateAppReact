import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';

/*
const onDelete = (id) => {
  console.log('Attempt to Delete item with id', id);
  // Implement your delete logic here
};
*/
const ItemList = ({ items, displayProperty }) => {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li 
          key={item.id} 
          className="flex items-center justify-between w-full px-4 py-2 bg-white font-semibold rounded-lg shadow hover:bg-gray-50 transition-colors duration-200"
        >
          div
          <span className="truncate">{item[displayProperty]}</span>
          <p> test</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

/*            <FontAwesomeIcon
              icon={faTrash}
              className="text-sky-500"
              size="lg"
            /> Delete*/


/*<button
            onClick={() => onDelete(item.id)}
            className="ml-2 text-gray-400 hover:text-red-500 focus:outline-none"
            aria-label={`Delete ${item[displayProperty]}`}
          >
            delete

          </button>*/