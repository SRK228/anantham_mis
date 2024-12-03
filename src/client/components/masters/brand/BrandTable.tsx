import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const BrandTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'origin', label: 'Origin' },
    { key: 'active', label: 'Active' }
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

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Brand Name" />;
};

export default BrandTable;