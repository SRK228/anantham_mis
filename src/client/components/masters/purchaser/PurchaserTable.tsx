import React from 'react';
import { BaseTable } from '../../ui/data-table/BaseTable';

const PurchaserTable = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'shortName', label: 'Shortname' },
    { key: 'active', label: 'Active' }
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

  return <BaseTable columns={columns} data={data} searchPlaceholder="Search Purchaser Name" />;
};

export default PurchaserTable;