import {
  Package,
  Box,
  Tag,
  FileText,
  Settings,
  Wrench,
  Database,
  BarChart2,
  Users,
  Layers,
  Tool
} from 'lucide-react';
import { SidebarItem } from '@/common/types/navigation';

export const misSidebarItems: SidebarItem[] = [
  {
    id: 'masters',
    label: 'Masters',
    icon: Package,
    subItems: [
      'Item',
      'Product',
      'Brand',
      'Type',
      'Style'
    ]
  },
  {
    id: 'entry',
    label: 'Entry',
    icon: Box,
    subItems: [
      'Purchase',
      'Sales',
      'Stock',
      'Returns'
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: Tag,
    subItems: [
      'Daily',
      'Weekly',
      'Monthly',
      'Custom'
    ]
  },
  {
    id: 'imports',
    label: 'Imports',
    icon: FileText,
    subItems: [
      'Data Import',
      'Export',
      'Templates'
    ]
  },
  {
    id: 'setup',
    label: 'Setup',
    icon: Settings,
    subItems: [
      'Users',
      'Roles',
      'Permissions'
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    subItems: [
      'Backup',
      'Restore',
      'Settings'
    ]
  }
]; 