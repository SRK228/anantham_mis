import React, { forwardRef } from 'react';
import { Search, ArrowUpDown, Download, Filter, Minimize2, Maximize2 } from 'lucide-react';
import { Input } from '../input';
import { Button } from '../button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../tooltip';
import { TableControlsProps } from './types';

export const TableControls = forwardRef<HTMLDivElement, TableControlsProps>(({
  searchValue,
  onSearch,
  onSort,
  onFilter,
  onDownload,
  onToggleCompact,
  isCompact,
  placeholder = 'Search...'
}, ref) => {
  return (
    <div ref={ref} className="flex justify-between items-center p-2 border-b bg-white">
      <div className="flex items-center space-x-2 flex-1">
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
      </div>

      <div className="flex items-center space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleCompact}
                className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
              >
                {isCompact ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isCompact ? 'Expand View' : 'Compact View'}
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onSort('name', 'asc')}
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
        </TooltipProvider>
      </div>
    </div>
  );
});

TableControls.displayName = 'TableControls';