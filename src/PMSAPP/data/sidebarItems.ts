import { SidebarItem } from '@/common/types/sidebar';
import StorageIcon from '@mui/icons-material/Storage';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const sidebarItems: SidebarItem[] = [
  { 
    id: 'masters', 
    label: 'Masters', 
    icon: StorageIcon,
    activeIcon: StorageOutlinedIcon,
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
    icon: DashboardIcon,
    activeIcon: DashboardOutlinedIcon,
    subItems: ['Overview', 'Analytics', 'Team Performance'] 
  },
  { 
    id: 'entry', 
    label: 'Entry', 
    icon: PostAddIcon,
    activeIcon: PostAddOutlinedIcon,
    subItems: ['Performance Review', 'Goal Setting', 'Training'] 
  },
  { 
    id: 'reports', 
    label: 'Reports', 
    icon: AssessmentIcon,
    activeIcon: AssessmentOutlinedIcon,
    subItems: ['Performance Reports', 'Training Reports', 'Analytics Reports'] 
  },
  { 
    id: 'setup', 
    label: 'Setup', 
    icon: SettingsIcon,
    activeIcon: SettingsOutlinedIcon,
    subItems: ['Review Cycle', 'Evaluation Criteria', 'Workflow'] 
  }
];