import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const EmployeeTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'branch', label: 'Branch' },
    { key: 'active', label: 'Active' },
    { key: 'usergroupcode', label: 'Usergroup Code' }
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

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Employee Name" />;
};

export default EmployeeTable;