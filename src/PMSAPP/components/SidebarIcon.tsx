import React from 'react';
import { LucideIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";

interface SidebarIconProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarIcon = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
}: SidebarIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-[#ff8080] text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};