import React from 'react';
import { Table } from '@/common/components/Table';

const SizeTable = () => {
  const columns = [
    { key: 'name', label: 'Size Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'sizeOrder', label: 'Size Order', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true },
    { key: 'bigSize', label: 'Big Size', sortable: true, filterable: true },
    { key: 'unit', label: 'Unit', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: '70X100',
      shortName: '70X100',
      sizeOrder: 0,
      active: true,
      bigSize: false,
      unit: 'NOS'
    },
    {
      name: '90X110',
      shortName: '90X110',
      sizeOrder: 0,
      active: true,
      bigSize: false,
      unit: ''
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Size Name"
  />;
};

export default SizeTable;