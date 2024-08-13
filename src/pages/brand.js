import React from 'react';
import ItemList from '../components/ItemList.js';
import AddButton from '../components/AddButton.js';

const brands = [{
  id: 0,
  name: 'Siglent',
  shortdesc:"",
}, {
  id: 1,
  name: 'Pineberry',
  shortdesc:"",
}, {
  id: 2,
  name: 'Elephant',
  shortdesc:"",
}, {
  id: 3,
  name: 'Keithlin',
  shortdesc:"",

}, {
  id: 4,
  name: 'Keysight',
  shortdesc:"",
}];

const Brand = () => {
    return (
      <div className="StandardPadding">
        <h1 className="text-2xl font-bold mb-4">List of Brands</h1>
        <ItemList items={brands} displayProperty="name" />
        <AddButton section="Brand"/>
      </div>
    );
  };

export default Brand;