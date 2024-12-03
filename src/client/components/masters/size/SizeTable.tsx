import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const SizeTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'sizeOrder', label: 'Size Order' },
    { key: 'active', label: 'Active' },
    { key: 'bigSize', label: 'Big Size' },
    { key: 'unit', label: 'Unit' }
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

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Size Name" />;
};

export default SizeTable;