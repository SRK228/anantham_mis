import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const PatternTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'active', label: 'Active' }
  ];

  const data = [
    {
      name: '1355',
      shortName: '1355',
      active: true
    },
    {
      name: '2 IN 1',
      shortName: '2IN1',
      active: true
    },
    {
      name: '3 PCS BED SET',
      shortName: '3PCS',
      active: true
    }
  ];

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Pattern Name" />;
};

export default PatternTable;