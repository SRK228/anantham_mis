import React from 'react';
import { BaseTable } from '@/client/components/ui/data-table/BaseTable';
import { Column } from '@/client/types/table';

interface MasterTableProps {
  columns: Column[];
  data: any[];
  searchPlaceholder?: string;
}

export const MasterTable: React.FC<MasterTableProps> = ({
  columns,
  data,
  searchPlaceholder
}) => {
  return (
    <div className="p-6">
      <BaseTable
        columns={columns}
        data={data}
        searchPlaceholder={searchPlaceholder}
      />
    </div>
  );
};