import React from 'react';
import { Table } from '@/common/components/Table';

const ItemTable = () => {
  const columns = [
    { key: 'name', label: 'Item Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'departmentName', label: 'Department Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active Status', sortable: true, filterable: true },
    { key: 'hsnCode', label: 'HSN Code', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: 'TEST',
      shortName: 'TEST',
      departmentName: 'INTERIOR',
      active: 'Yes',
      hsnCode: '0'
    },
    {
      name: 'TABLES AND CHAIRS',
      shortName: 'TABLES AND CHAIRS',
      departmentName: 'INTERIOR',
      active: 'Yes',
      hsnCode: '0'
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Item Name"
  />;
};

export default ItemTable;