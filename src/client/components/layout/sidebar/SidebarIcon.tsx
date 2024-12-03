import React from 'react';
import { ElementType } from 'react';
import { cn } from '@/client/utils/cn';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

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
            className="sidebar-item"
          >
            <div className={cn(
              "sidebar-icon-wrapper",
              isActive && "active"
            )}>
              {isActive ? (
                <ActiveIcon 
                  sx={{ 
                    fontSize: 24,
                    transition: 'all 0.3s ease-in-out',
                  }}
                  className={cn(
                    "sidebar-icon",
                    "active"
                  )} 
                />
              ) : (
                <Icon 
                  sx={{ 
                    fontSize: 24,
                    transition: 'all 0.3s ease-in-out',
                  }}
                  className="sidebar-icon" 
                />
              )}
            </div>
            <span className={cn(
              "sidebar-text",
              isActive && "active"
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