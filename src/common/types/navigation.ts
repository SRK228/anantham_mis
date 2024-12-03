import { SvgIconComponent } from '@mui/icons-material';

export type AppName = 'MIS' | 'PMS';

export interface SidebarItem {
  id: string;
  label: string;
  icon: SvgIconComponent;
  activeIcon?: SvgIconComponent;
  subItems: string[];
}

export interface PageTemplateProps {
  appName: AppName;
  sidebarItems: SidebarItem[];
  defaultPath: string;
} 