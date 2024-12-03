import React from 'react';
import { Table } from '@/common/components/Table';

const ColourTable = () => {
  const columns = [
    { key: 'name', label: 'Colour Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: '164',
      shortName: '164',
      active: true
    },
    {
      name: '201',
      shortName: '201',
      active: true
    },
    {
      name: '205',
      shortName: '205',
      active: true
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Colour Name"
  />;
};

export default ColourTable;