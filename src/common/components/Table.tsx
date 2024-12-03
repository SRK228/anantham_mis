import React from 'react';
import { Eye, Search, Filter, ArrowUpDown, Download, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { cn } from '@/common/utils/cn';
import { Column } from '@/common/types/table';

interface TableProps {
  columns: Column[];
  data: any[];
  searchPlaceholder?: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  searchPlaceholder = "Search..."
}) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [isCompact, setIsCompact] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const filteredData = React.useMemo(() => {
    return data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [data, searchValue]);

  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {}}
                  className="text-[#ff8080] hover:text-[#ff8080]/90 hover:bg-[#ff8080]/10"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Filter</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {}}
                  className="text-[#ff8080] hover:text-[#ff8080]/90 hover:bg-[#ff8080]/10"
                >
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Sort</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {}}
                  className="text-[#ff8080] hover:text-[#ff8080]/90 hover:bg-[#ff8080]/10"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCompact(!isCompact)}
                  className="text-[#ff8080] hover:text-[#ff8080]/90 hover:bg-[#ff8080]/10"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Compact View</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

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
                    className="text-[#ff8080] hover:text-[#ff8080]/90 hover:bg-[#ff8080]/10"
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