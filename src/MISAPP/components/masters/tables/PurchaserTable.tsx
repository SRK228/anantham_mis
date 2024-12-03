import React from 'react';
import { Table } from '@/common/components/Table';

const PurchaserTable = () => {
  const columns = [
    { key: 'name', label: 'Purchaser Name', sortable: true, filterable: true },
    { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
    { key: 'active', label: 'Active', sortable: true, filterable: true }
  ];

  const data = [
    {
      name: 'SP3',
      shortName: 'SP3',
      active: true
    },
    {
      name: 'SH1',
      shortName: 'SH1',
      active: true
    },
    {
      name: 'SH4',
      shortName: 'SH4',
      active: true
    }
  ];

  return <Table 
    columns={columns} 
    data={data} 
    searchPlaceholder="Search Purchaser Name"
  />;
};

export default PurchaserTable;