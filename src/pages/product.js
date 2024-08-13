import React from 'react';
import ItemList from '../components/ItemList.js';
import AddButton from '../components/AddButton.js';

const products = [{
  id: 0,
  name: 'Siglent',
}, {
  id: 1,
  name: 'Pineberry',
}, {
  id: 2,
  name: 'Elephant',
}, {
  id: 3,
  name: 'Keithlin',

}, {
  id: 4,
  name: 'Keysight',
}];

const Product = () => {
    return (
      <div className="StandardPadding">
        <h1 className="text-2xl font-bold mb-4">List of Brands</h1>
        <ItemList items={products} displayProperty="name" />
        <AddButton section="Product"/>
      </div>
    );
  };

export default Product;


