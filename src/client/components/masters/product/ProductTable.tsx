import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const ProductTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'category', label: 'Category' },
    { key: 'subCategory', label: 'Sub Category' },
    { key: 'active', label: 'Active' },
    { key: 'price', label: 'Price' }
  ];

  const data = [
    {
      name: 'Cotton Shirt',
      shortName: 'CSH',
      category: 'Apparel',
      subCategory: 'Shirts',
      active: true,
      price: 999
    },
    {
      name: 'Denim Jeans',
      shortName: 'DJN',
      category: 'Apparel',
      subCategory: 'Pants',
      active: true,
      price: 1499
    }
  ];

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Product Name" />;
};

export default ProductTable;