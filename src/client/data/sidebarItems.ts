import { SidebarItem } from '../types/sidebar';
import StorageIcon from '@mui/icons-material/Storage';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsightsIcon from '@mui/icons-material/Insights';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import BuildIcon from '@mui/icons-material/Build';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export const sidebarItems: SidebarItem[] = [
  { 
    id: 'masters', 
    label: 'Masters', 
    icon: StorageIcon,
    activeIcon: StorageOutlinedIcon,
    subItems: [
      'Item',
      'Product',
      'Brand',
      'Type',
      'Style',
      'Pattern',
      'Variety',
      'Colour',
      'Size',
      'Purchaser',
      'Employee'
    ] 
  },
  { 
    id: 'entry', 
    label: 'Entry', 
    icon: PostAddIcon,
    activeIcon: PostAddOutlinedIcon,
    subItems: ['Sales Entry', 'Purchase Entry', 'Stock Entry'] 
  },
  { 
    id: 'reports', 
    label: 'Reports', 
    icon: AssessmentIcon,
    activeIcon: AssessmentOutlinedIcon,
    subItems: ['Sales Report', 'Inventory Report', 'Financial Report'] 
  },
  { 
    id: 'imports', 
    label: 'Imports', 
    icon: CloudUploadIcon,
    activeIcon: CloudUploadOutlinedIcon,
    subItems: ['Import Data', 'Export Data'] 
  },
  { 
    id: 'setup', 
    label: 'Setup', 
    icon: SettingsIcon,
    activeIcon: SettingsOutlinedIcon,
    subItems: ['Company Setup', 'User Setup'] 
  },
  { 
    id: 'mis', 
    label: 'MIS', 
    icon: InsightsIcon,
    activeIcon: InsightsOutlinedIcon,
    subItems: ['Dashboard', 'Analytics'] 
  },
  { 
    id: 'tools', 
    label: 'Tools', 
    icon: BuildIcon,
    activeIcon: BuildOutlinedIcon,
    subItems: ['Calculator', 'Notes', 'Calendar'] 
  },
];