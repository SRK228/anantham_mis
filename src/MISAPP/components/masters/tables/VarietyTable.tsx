import React from 'react';
import { Table } from '@/common/components/Table';

const VarietyTable = () => {
  const columns = [
    { key: 'name', label: 'Variety Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
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

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Variety Name"
  />;
};

export default VarietyTable;