import { useState, useMemo } from 'react';
import { SortConfig, FilterConfig } from '@/client/components/ui/data-table/types';

export const useTableData = (initialData: any[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });
  const [filterConfig, setFilterConfig] = useState<FilterConfig>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isCompact, setIsCompact] = useState(false);

  const filteredData = useMemo(() => {
    let filtered = [...initialData];

    if (searchValue) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }

    if (sortConfig.key && sortConfig.direction) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [initialData, searchValue, sortConfig, filterConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  return {
    searchValue,
    setSearchValue,
    sortConfig,
    setSortConfig,
    filterConfig,
    setFilterConfig,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    isCompact,
    setIsCompact,
    filteredData,
    paginatedData
  };
};