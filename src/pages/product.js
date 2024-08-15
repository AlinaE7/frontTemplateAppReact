import React from 'react';
import ItemList from '../components/ItemList.js';
import AddButton from '../components/ButtonAddBrand.js';

const products = [
  {
    id: 1,
    displayMPN: "Smartphone X",
    sku: "SP-001",
    mpn: "SPX-2023"
  },
  {
    id: 2,
    displayMPN: "Laptop Pro",
    sku: "LP-002",
    mpn: "LPP-2023"
  },
  {
    id: 3,
    displayMPN: "Wireless Earbuds",
    sku: "WE-003",
    mpn: "WEB-2023"
  },
  {
    id: 4,
    displayMPN: "Smart Watch",
    sku: "SW-004",
    mpn: "SWA-2023"
  },
  {
    id: 5,
    displayMPN: "Tablet Mini",
    sku: "TM-005",
    mpn: "TMI-2023"
  }
];
const Product = () => {
    return (
      <div className="StandardPadding">
        <h1 className="text-2xl font-bold mb-4">List of Brands</h1>
        <ItemList items={products} displayProperty="displayMPN" />
        <AddButton section="Product"/>
      </div>
    );
  };

export default Product;


