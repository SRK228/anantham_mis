import {
  Package,
  LayoutDashboard,
  FileText,
  Box,
  Settings,
  Users,
  Briefcase,
  Target,
  LineChart,
  BarChart2,
  ClipboardList,
  GitBranch
} from 'lucide-react';
import { SidebarItem } from '@/common/types/navigation';

export const pmsSidebarItems: SidebarItem[] = [
  {
    id: 'masters',
    label: 'Masters',
    icon: Package,
    subItems: [
      'Department',
      'Designation',
      'Employee',
      'Role',
      'Skill',
      'KPI'
    ]
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    subItems: [
      'Overview',
      'Analytics',
      'Team Performance'
    ]
  },
  {
    id: 'entry',
    label: 'Entry',
    icon: Box,
    subItems: [
      'Performance Review',
      'Goal Setting',
      'Training'
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    subItems: [
      'Performance Reports',
      'Training Reports',
      'Analytics Reports'
    ]
  },
  {
    id: 'setup',
    label: 'Setup',
    icon: Settings,
    subItems: [
      'Review Cycle',
      'Evaluation Criteria',
      'Workflow'
    ]
  }
]; 