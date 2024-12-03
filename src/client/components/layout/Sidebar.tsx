import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '../ui/button';
import { SidebarIcon } from './sidebar/SidebarIcon';
import { useAppDispatch, useAppSelector } from '@/client/hooks/redux';
import { setActiveHeader, toggleSidebar } from '@/client/store/slices/navigationSlice';
import { sidebarItems } from '@/client/data/sidebarItems';
import { pmsSidebarItems } from '@/client/data/pmsSidebarItems';
import { cn } from '@/client/utils/cn';

export const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { activeHeader } = useAppSelector(state => state.navigation);

  // Determine which sidebar items to use based on the current route
  const items = location.pathname.startsWith('/pms') ? pmsSidebarItems : sidebarItems;

  const handleHeaderClick = (label: string) => {
    dispatch(setActiveHeader(label));
  };

  return (
    <aside className="fixed left-0 top-0 h-full bg-white shadow-lg w-16 flex flex-col z-10">
      <div className="p-3 border-b border-gray-100 flex justify-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => dispatch(toggleSidebar())}
          className={cn(
            "transition-all duration-300 ease-in-out",
            "hover:bg-gray-100",
            "active:scale-95"
          )}
        >
          <MenuIcon className="h-5 w-5 text-[#ff8080]" />
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <SidebarIcon
            key={item.id}
            icon={item.icon}
            activeIcon={item.activeIcon}
            label={item.label}
            isActive={activeHeader === item.label}
            onClick={() => handleHeaderClick(item.label)}
          />
        ))}
      </nav>
    </aside>
  );
};