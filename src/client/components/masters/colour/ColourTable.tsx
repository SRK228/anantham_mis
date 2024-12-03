import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const ColourTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'active', label: 'Active' }
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

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Colour Name" />;
};

export default ColourTable;