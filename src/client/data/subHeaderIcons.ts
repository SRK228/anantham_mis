import { 
  Package,
  Box,
  Tag,
  List,
  Palette,
  Grid,
  Layers,
  Paintbrush,
  Ruler,
  Users,
  UserCircle,
  Receipt,
  ShoppingCart,
  PackageCheck,
  BarChart,
  PieChart,
  LineChart,
  FileDown,
  FileUp,
  Building2,
  UserCog,
  LayoutDashboard,
  TrendingUp,
  Calculator,
  StickyNote,
  Calendar
} from 'lucide-react';

export const subHeaderIcons = {
  // Masters
  'Item': Box,
  'Product': Package,
  'Brand': Tag,
  'Type': List,
  'Style': Palette,
  'Pattern': Grid,
  'Variety': Layers,
  'Colour': Paintbrush,
  'Size': Ruler,
  'Purchaser': UserCircle,
  'Employee': Users,

  // Entry
  'Sales Entry': Receipt,
  'Purchase Entry': ShoppingCart,
  'Stock Entry': PackageCheck,

  // Reports
  'Sales Report': BarChart,
  'Inventory Report': PieChart,
  'Financial Report': LineChart,

  // Imports
  'Import Data': FileDown,
  'Export Data': FileUp,

  // Setup
  'Company Setup': Building2,
  'User Setup': UserCog,

  // MIS
  'Dashboard': LayoutDashboard,
  'Analytics': TrendingUp,

  // Tools
  'Calculator': Calculator,
  'Notes': StickyNote,
  'Calendar': Calendar
};