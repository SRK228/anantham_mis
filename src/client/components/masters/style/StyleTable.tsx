import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const StyleTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'active', label: 'Active' }
  ];

  const data = [
    {
      name: 'TISSUE',
      shortName: 'TISSUE',
      active: true
    },
    {
      name: '016',
      shortName: '016',
      active: true
    }
  ];

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Style Name" />;
};

export default StyleTable;