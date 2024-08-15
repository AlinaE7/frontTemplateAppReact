import React from 'react';
import ItemList from '../components/ItemList.js';
import AddButton from '../components/ButtonAddBrand.js';

const templates = [{
  id: 0,
  name: 'Camera',
}, {
  id: 1,
  name: 'Oscilloscope',
}, {
  id: 2,
  name: 'Case',
}, {
  id: 3,
  name: 'Multimeter',

}, {
  id: 4,
  name: 'XYZ',
}];

const Template = () => {
    return (
      <div className="StandardPadding">
        <h1 className="text-2xl font-bold mb-4">List of Templates</h1>
        <ItemList items={templates} displayProperty="name" />
        <AddButton section="Template"/>
      </div>
    );
  };

export default Template;