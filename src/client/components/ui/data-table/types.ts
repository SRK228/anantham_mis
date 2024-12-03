import { ReactNode } from 'react';

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any) => ReactNode;
}

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc' | null;
}

export interface FilterConfig {
  [key: string]: string[];
}

export interface TableControlsProps {
  searchValue: string;
  onSearch: (value: string) => void;
  onSort: (key: string, direction: 'asc' | 'desc') => void;
  onFilter: (filters: FilterConfig) => void;
  onDownload: () => void;
  onToggleCompact: () => void;
  isCompact: boolean;
  placeholder?: string;
}

export interface BaseTableProps {
  columns: Column[];
  data: any[];
  searchPlaceholder?: string;
}

export type DensityType = 'compact' | 'standard' | 'comfortable';