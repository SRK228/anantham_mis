import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const TypeTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'active', label: 'Active' }
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

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Type Name" />;
};

export default TypeTable;