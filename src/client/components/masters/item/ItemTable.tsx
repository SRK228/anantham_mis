import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';
import { Column } from '../../ui/data-table/types';

const ItemTable = () => {
  const columns: Column[] = [
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

  return <BaseTable 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Item Name"
  />;
};

export default ItemTable;