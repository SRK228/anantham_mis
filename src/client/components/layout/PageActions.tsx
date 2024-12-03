import React from 'react';
import { Plus, Pencil, Trash2, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PageActionsProps {
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onRefresh?: () => void;
}

export const PageActions: React.FC<PageActionsProps> = ({
  onAdd,
  onEdit,
  onDelete,
  onRefresh,
}) => {
  return (
    <div className="fixed top-[5.5rem] left-16 right-0 bg-white border-b border-gray-200 z-10">
      <div className="px-6 py-2 flex items-center space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={onAdd}
                className="hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add (F2)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={onEdit}
                className="hover:bg-gray-100"
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit (F3)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={onDelete}
                className="hover:bg-gray-100"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete (F9)</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={onRefresh}
                className="hover:bg-gray-100"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Refresh (F5)</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};