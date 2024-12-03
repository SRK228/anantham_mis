import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/common/hooks/redux';
import { setActiveHeader } from '@/common/store/slices/navigationSlice';
import { misSidebarItems } from '@/MISAPP/config/sidebarConfig';
import { pmsSidebarItems } from '@/PMSAPP/config/sidebarConfig';
import { SidebarBase } from './SidebarBase';

export const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { activeHeader } = useAppSelector(state => state.navigation);

  // Determine which sidebar items to use based on the current route
  const items = location.pathname.startsWith('/pms') ? pmsSidebarItems : misSidebarItems;

  const handleItemClick = (id: string, label: string) => {
    dispatch(setActiveHeader(label));
  };

  return (
    <SidebarBase
      items={items}
      activeItem={activeHeader}
      onItemClick={handleItemClick}
    />
  );
}; 