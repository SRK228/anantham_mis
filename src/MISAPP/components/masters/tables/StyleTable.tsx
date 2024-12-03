import React from 'react';
import { Table } from '@/common/components/Table';

const StyleTable = () => {
  const columns = [
    { key: 'name', label: 'Style Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
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

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Style Name"
  />;
};

export default StyleTable;