import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
import { cn } from '@/common/lib/utils';

interface SidebarIconProps {
  icon: LucideIcon;
  activeIcon?: LucideIcon;
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
  const IconComponent = isActive && ActiveIcon ? ActiveIcon : Icon;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className="flex items-center w-full"
          >
            <div 
              className={cn(
                "p-[2mm] rounded-md transition-all duration-200",
                isActive 
                  ? "bg-[#ff8080]/10" 
                  : "hover:bg-[#ff8080]/5"
              )}
            >
              <IconComponent 
                className={cn(
                  "h-5 w-5",
                  "transition-colors duration-200",
                  isActive ? "text-[#ff8080]" : "text-gray-500 hover:text-[#ff8080]"
                )} 
              />
            </div>
            <span 
              className={cn(
                "ml-3 text-sm font-medium",
                isActive ? "text-[#ff8080]" : "text-gray-500"
              )}
            >
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