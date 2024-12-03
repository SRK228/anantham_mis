import React from 'react';
import { LucideIcon } from 'lucide-react';
import { theme } from '@/common/styles/theme';
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
    <button
      onClick={onClick}
      className="w-full flex flex-col items-center py-2"
    >
      {/* Icon container with padding and hover effects */}
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
            theme.sizes.icon.default,
            isActive 
              ? "text-[#ff8080]" 
              : "text-gray-500 hover:text-[#ff8080]"
          )} 
        />
      </div>
      
      {/* Label without padding or hover effects */}
      <span className={cn(
        "mt-1 text-xs font-medium",
        isActive ? "text-[#ff8080]" : "text-gray-600"
      )}>
        {label}
      </span>
    </button>
  );
}; 