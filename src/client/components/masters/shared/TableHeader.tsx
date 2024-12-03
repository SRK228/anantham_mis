import React from 'react';
import { Search, Filter, ArrowUpDown, Download, Minimize2 } from 'lucide-react';
import { Input } from '@/client/components/ui/input';
import { Button } from '@/client/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/client/components/ui/tooltip';

interface TableHeaderProps {
  searchValue: string;
  onSearch: (value: string) => void;
  onSort: () => void;
  onFilter: () => void;
  onDownload: () => void;
  onCompact: () => void;
  placeholder?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  searchValue,
  onSearch,
  onSort,
  onFilter,
  onDownload,
  onCompact,
  placeholder = "Search..."
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="relative w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
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
                onClick={onFilter}
                className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
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
                onClick={onSort}
                className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
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
                onClick={onDownload}
                className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
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
                onClick={onCompact}
                className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Compact View</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};