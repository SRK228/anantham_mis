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