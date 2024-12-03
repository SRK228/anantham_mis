import React from 'react';
import { ElementType } from 'react';
import { cn } from '@/common/utils/cn';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";

interface SidebarIconProps {
  icon: ElementType;
  activeIcon: ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className="flex items-center w-full py-2 transition-colors duration-200"
          >
            <div className={cn(
              "p-[2mm] rounded-md transition-all duration-200",
              isActive 
                ? "bg-[#ff8080]/10" 
                : "hover:bg-[#ff8080]/5"
            )}>
              {isActive ? (
                <ActiveIcon 
                  sx={{ 
                    fontSize: 24,
                    transition: 'all 0.3s ease-in-out',
                    color: '#ff8080'
                  }}
                />
              ) : (
                <Icon 
                  sx={{ 
                    fontSize: 24,
                    transition: 'all 0.3s ease-in-out',
                    color: '#666666'
                  }}
                />
              )}
            </div>
            <span className={cn(
              "ml-3 text-sm font-medium transition-colors duration-200",
              isActive ? "text-[#ff8080]" : "text-gray-600"
            )}>
              {label}
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};