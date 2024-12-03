import React from 'react';
import { Table } from '@/common/components/Table';

const TypeTable = () => {
  const columns = [
    { key: 'name', label: 'Type Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: '12 X 12',
      shortName: '1212',
      active: true
    },
    {
      name: 'AXAKALAK',
      shortName: 'AXK',
      active: true
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Type Name"
  />;
};

export default TypeTable;