import React from 'react';
import { LucideIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
            className={`w-full p-3 flex items-center justify-center transition-colors duration-200 ${
              isActive
                ? 'text-[#ff8080] bg-[#ff8080]/10'
                : 'text-gray-500 hover:text-[#ff8080] hover:bg-[#ff8080]/5'
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