import React from 'react';
import { Table } from '@/common/components/Table';

const BrandTable = () => {
  const columns = [
    { key: 'name', label: 'Brand Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'manufacturer', label: 'Manufacturer', sortable: true, filterable: true },
    { key: 'origin', label: 'Origin', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: 'Raymond',
      shortName: 'RMD',
      manufacturer: 'Raymond Limited',
      origin: 'India',
      active: true
    },
    {
      name: 'Peter England',
      shortName: 'PE',
      manufacturer: 'Aditya Birla Fashion',
      origin: 'India',
      active: true
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Brand Name"
  />;
};

export default BrandTable;