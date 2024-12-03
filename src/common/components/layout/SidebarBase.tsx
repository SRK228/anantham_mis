import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { SidebarIcon } from './SidebarIcon';
import { useAppDispatch } from '@/common/hooks/redux';
import { toggleSidebar } from '@/common/store/slices/navigationSlice';
import { SidebarItem } from '@/common/types/navigation';
import { theme } from '@/common/styles/theme';
import { cn } from '@/common/lib/utils';

interface SidebarBaseProps {
  items: SidebarItem[];
  activeItem: string | null;
  onItemClick: (id: string, label: string) => void;
}

export const SidebarBase: React.FC<SidebarBaseProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  const dispatch = useAppDispatch();

  return (
    <aside className="fixed left-0 top-0 h-full bg-white shadow-lg w-16 flex flex-col z-10">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 flex justify-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => dispatch(toggleSidebar())}
          className={cn(
            theme.transitions.smooth,
            "hover:bg-gray-100",
            "active:scale-95"
          )}
        >
          <Menu className={cn(theme.sizes.icon.default, "text-[#ff8080]")} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="px-1">
              <SidebarIcon
                icon={item.icon}
                activeIcon={item.activeIcon}
                label={item.label}
                isActive={activeItem === item.label}
                onClick={() => onItemClick(item.id, item.label)}
              />
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}; 