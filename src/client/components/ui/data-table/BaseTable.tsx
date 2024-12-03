import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from '../button';
import { TableControls } from './TableControls';
import { BaseTableProps } from './types';
import { cn } from '@/client/utils/cn';
import { useTableData } from '@/client/hooks/useTableData';
import { downloadTableData } from '@/client/utils/exportUtils';

export const BaseTable: React.FC<BaseTableProps> = ({
  columns,
  data,
  searchPlaceholder = "Search..."
}) => {
  const {
    searchValue,
    setSearchValue,
    sortConfig,
    setSortConfig,
    filterConfig,
    setFilterConfig,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    isCompact,
    setIsCompact,
    filteredData,
    paginatedData
  } = useTableData(data);

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
    setSortConfig({ key, direction });
  };

  const handleFilter = (filters: FilterConfig) => {
    setFilterConfig(filters);
    setCurrentPage(1);
  };

  const handleDownload = () => {
    downloadTableData(columns, data);
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <TableControls
        searchValue={searchValue}
        onSearch={setSearchValue}
        onSort={handleSort}
        onFilter={handleFilter}
        onDownload={handleDownload}
        onToggleCompact={() => setIsCompact(!isCompact)}
        isCompact={isCompact}
        placeholder={searchPlaceholder}
      />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className={cn(
                "text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                isCompact ? "px-2 py-2" : "px-4 py-3"
              )}>
                S.No
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    "text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer",
                    isCompact ? "px-2 py-2" : "px-4 py-3"
                  )}
                  onClick={() => handleSort(column.key, 'asc')}
                >
                  {column.label}
                </th>
              ))}
              <th className={cn(
                "text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                isCompact ? "px-2 py-2" : "px-4 py-3"
              )}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, index) => (
              <tr key={index} className={cn(
                "hover:bg-gray-50",
                isCompact ? "text-xs" : "text-sm"
              )}>
                <td className={cn(
                  "whitespace-nowrap text-gray-500",
                  isCompact ? "px-2 py-1" : "px-4 py-3"
                )}>
                  {(currentPage - 1) * rowsPerPage + index + 1}
                </td>
                {columns.map((column) => (
                  <td key={column.key} className={cn(
                    "whitespace-nowrap text-gray-900",
                    isCompact ? "px-2 py-1" : "px-4 py-3"
                  )}>
                    {column.render ? column.render(row[column.key]) : row[column.key]}
                  </td>
                ))}
                <td className={cn(
                  "whitespace-nowrap text-right font-medium",
                  isCompact ? "px-2 py-1" : "px-4 py-3"
                )}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Rows per page:</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">
            {(currentPage - 1) * rowsPerPage + 1}-{Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length}
          </span>
        </div>
      </div>
    </div>
  );
};