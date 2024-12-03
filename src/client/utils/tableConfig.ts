import { Column } from '@/client/components/ui/data-table/types';

interface TableConfig {
  columns: Column[];
  data: any[];
}

const configs: Record<string, TableConfig> = {
  'Item': {
    columns: [
      { key: 'name', label: 'Item Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'departmentName', label: 'Department Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active Status', sortable: true, filterable: true },
      { key: 'hsnCode', label: 'HSN Code', sortable: true, filterable: true }
    ],
    data: [
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
    ]
  },
  'Brand': {
    columns: [
      { key: 'name', label: 'Brand Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'manufacturer', label: 'Manufacturer', sortable: true, filterable: true },
      { key: 'origin', label: 'Origin', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: 'Raymond',
        shortName: 'RMD',
        manufacturer: 'Raymond Limited',
        origin: 'India',
        active: true
      }
    ]
  },
  'Type': {
    columns: [
      { key: 'name', label: 'Type Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: '12 X 12',
        shortName: '1212',
        active: true
      }
    ]
  },
  'Style': {
    columns: [
      { key: 'name', label: 'Style Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: 'TISSUE',
        shortName: 'TISSUE',
        active: true
      }
    ]
  },
  'Pattern': {
    columns: [
      { key: 'name', label: 'Pattern Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: '1355',
        shortName: '1355',
        active: true
      }
    ]
  },
  'Variety': {
    columns: [
      { key: 'name', label: 'Variety Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: 'JOT09S',
        shortName: 'J09S',
        active: true
      }
    ]
  },
  'Colour': {
    columns: [
      { key: 'name', label: 'Colour Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: '164',
        shortName: '164',
        active: true
      }
    ]
  },
  'Size': {
    columns: [
      { key: 'name', label: 'Size Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'sizeOrder', label: 'Size Order', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true },
      { key: 'bigSize', label: 'Big Size', sortable: true, filterable: true },
      { key: 'unit', label: 'Unit', sortable: true, filterable: true }
    ],
    data: [
      {
        name: '70X100',
        shortName: '70X100',
        sizeOrder: 0,
        active: true,
        bigSize: false,
        unit: 'NOS'
      }
    ]
  },
  'Purchaser': {
    columns: [
      { key: 'name', label: 'Purchaser Name', sortable: true, filterable: true },
      { key: 'shortName', label: 'Short Name', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true }
    ],
    data: [
      {
        name: 'SP3',
        shortName: 'SP3',
        active: true
      }
    ]
  },
  'Employee': {
    columns: [
      { key: 'name', label: 'Employee Name', sortable: true, filterable: true },
      { key: 'username', label: 'Username', sortable: true, filterable: true },
      { key: 'branch', label: 'Branch', sortable: true, filterable: true },
      { key: 'active', label: 'Active', sortable: true, filterable: true },
      { key: 'usergroupcode', label: 'Usergroup Code', sortable: true, filterable: true }
    ],
    data: [
      {
        name: 'ANANTHAMMRS',
        username: 'ANANTHAM',
        branch: 'KUMBAKONAM',
        active: true,
        usergroupcode: 0
      }
    ]
  }
};

export const getTableConfig = (subHeader: string): TableConfig | undefined => {
  return configs[subHeader];
};