import {
  Inventory2Outlined,
  Inventory2,
  DashboardOutlined,
  Dashboard,
  DriveFileRenameOutlineOutlined,
  DriveFileRenameOutline,
  AssessmentOutlined,
  Assessment,
  SettingsOutlined,
  Settings
} from '@mui/icons-material';
import { SidebarItem } from '@/common/types/navigation';

export const pmsSidebarItems: SidebarItem[] = [
  {
    id: 'masters',
    label: 'Masters',
    icon: Inventory2Outlined,
    activeIcon: Inventory2,
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
    icon: DashboardOutlined,
    activeIcon: Dashboard,
    subItems: [
      'Overview',
      'Analytics',
      'Team Performance'
    ]
  },
  {
    id: 'entry',
    label: 'Entry',
    icon: DriveFileRenameOutlineOutlined,
    activeIcon: DriveFileRenameOutline,
    subItems: [
      'Performance Review',
      'Goal Setting',
      'Training'
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: AssessmentOutlined,
    activeIcon: Assessment,
    subItems: [
      'Performance Reports',
      'Training Reports',
      'Analytics Reports'
    ]
  },
  {
    id: 'setup',
    label: 'Setup',
    icon: SettingsOutlined,
    activeIcon: Settings,
    subItems: [
      'Review Cycle',
      'Evaluation Criteria',
      'Workflow'
    ]
  }
]; 