import React from 'react';
import { Table } from '@/common/components/Table';

const EmployeeTable = () => {
  const columns = [
    { key: 'name', label: 'Employee Name', sortable: true, filterable: true },
    { key: 'username', label: 'Username', sortable: true, filterable: true },
    { key: 'branch', label: 'Branch', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true },
    { key: 'usergroupcode', label: 'Usergroup Code', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: 'ANANTHAMMRS',
      username: 'ANANTHAM',
      branch: 'KUMBAKONAM',
      active: true,
      usergroupcode: 0
    },
    {
      name: 'GANESAN',
      username: 'GANESAN',
      branch: 'KUMBAKONAM',
      active: true,
      usergroupcode: 0
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Employee Name"
  />;
};

export default EmployeeTable;