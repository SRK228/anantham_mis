export const downloadTableData = (columns: any[], data: any[]) => {
  const csv = [
    columns.map(col => col.label),
    ...data.map(item => columns.map(col => item[col.key]))
  ].map(row => row.join(',')).join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'table-data.csv';
  a.click();
  window.URL.revokeObjectURL(url);
};