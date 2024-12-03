import React from 'react';
import { Table } from '@/common/components/Table';

const ProductTable = () => {
  const columns = [
    { key: 'name', label: 'Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Shortname', sortable: true, filterable: true },
    { key: 'category', label: 'Category', sortable: true, filterable: true },
    { key: 'subCategory', label: 'Sub Category', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true },
    { key: 'price', label: 'Price', sortable: true, filterable: true }
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

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Product Name"
  />;
};

export default ProductTable;