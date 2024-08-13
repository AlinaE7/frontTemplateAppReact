import React from 'react';

const ItemList = ({ items, displayProperty }) => {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li 
          key={item.id} 
          className="w-48 px-4 py-2 bg-white font-semibold rounded-lg shadow hover:bg-gray-50 transition-colors duration-200"
        >
          {item[displayProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;