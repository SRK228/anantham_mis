import {
  Inventory2Outlined,
  Inventory2,
  EditNoteOutlined,
  EditNote,
  AssessmentOutlined,
  Assessment,
  CloudDownloadOutlined,
  CloudDownload,
  SettingsOutlined,
  Settings,
  BuildOutlined,
  Build,
  CategoryOutlined,
  Category,
  BrandingWatermarkOutlined,
  BrandingWatermark,
  StyleOutlined,
  Style,
  PatternOutlined,
  Pattern,
  FormatPaintOutlined,
  FormatPaint,
  PaletteOutlined,
  Palette,
  FormatSizeOutlined,
  FormatSize,
  PersonOutlineOutlined,
  PersonOutline,
  GroupOutlined,
  Group
} from '@mui/icons-material';
import { SidebarItem } from '@/common/types/navigation';

export const misSidebarItems: SidebarItem[] = [
  {
    id: 'masters',
    label: 'Masters',
    icon: Inventory2Outlined,
    activeIcon: Inventory2,
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
    icon: EditNoteOutlined,
    activeIcon: EditNote,
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
    icon: AssessmentOutlined,
    activeIcon: Assessment,
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
    icon: CloudDownloadOutlined,
    activeIcon: CloudDownload,
    subItems: [
      'Data Import',
      'Export',
      'Templates'
    ]
  },
  {
    id: 'setup',
    label: 'Setup',
    icon: SettingsOutlined,
    activeIcon: Settings,
    subItems: [
      'Users',
      'Roles',
      'Permissions'
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: BuildOutlined,
    activeIcon: Build,
    subItems: [
      'Backup',
      'Restore',
      'Settings'
    ]
  }
];