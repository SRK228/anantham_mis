import { ElementType } from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon: ElementType;
  activeIcon: ElementType;
  subItems: string[];
}