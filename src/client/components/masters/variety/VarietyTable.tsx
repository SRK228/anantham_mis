import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const VarietyTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'active', label: 'Active' }
  ];

  const data = [
    {
      name: 'JOT09S',
      shortName: 'J09S',
      active: true
    },
    {
      name: 'JOSHUA',
      shortName: 'JOSHN',
      active: true
    },
    {
      name: '004BLACK',
      shortName: '004BL',
      active: true
    }
  ];

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Variety Name" />;
};

export default VarietyTable;