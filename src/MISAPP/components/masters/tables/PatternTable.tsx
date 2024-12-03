import React from 'react';
import { Table } from '@/common/components/Table';

const PatternTable = () => {
  const columns = [
    { key: 'name', label: 'Pattern Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
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

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Pattern Name"
  />;
};

export default PatternTable;