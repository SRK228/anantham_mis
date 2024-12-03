import React, { Suspense, memo } from 'react';
import { toast } from 'sonner';
import { ItemTable, ProductTable, BrandTable, TypeTable, StyleTable, PatternTable, VarietyTable, ColourTable, SizeTable, EmployeeTable, PurchaserTable } from './tables';

const LoadingFallback = () => (
  <div className="h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

interface MastersContentProps {
  subHeader: string;
}

const MastersContent: React.FC<MastersContentProps> = memo(({ subHeader }) => {
  const renderTable = () => {
    try {
      switch (subHeader) {
        case 'Item':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <ItemTable />
            </div>
          );
        case 'Product':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <ProductTable />
            </div>
          );
        case 'Brand':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <BrandTable />
            </div>
          );
        case 'Type':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <TypeTable />
            </div>
          );
        case 'Style':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <StyleTable />
            </div>
          );
        case 'Pattern':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <PatternTable />
            </div>
          );
        case 'Variety':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <VarietyTable />
            </div>
          );
        case 'Colour':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <ColourTable />
            </div>
          );
        case 'Size':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <SizeTable />
            </div>
          );
        case 'Employee':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <EmployeeTable />
            </div>
          );
        case 'Purchaser':
          return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <PurchaserTable />
            </div>
          );
        default:
          return (
            <div className="h-full flex items-center justify-center text-gray-500">
              <p>Select a module from the sidebar to get started</p>
            </div>
          );
      }
    } catch (error) {
      console.error('Error rendering table:', error);
      toast.error('An error occurred while loading the content');
      return (
        <div className="h-full flex items-center justify-center text-red-500">
          Failed to load content. Please try again.
        </div>
      );
    }
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      {renderTable()}
    </Suspense>
  );
});

MastersContent.displayName = 'MastersContent';

export default MastersContent;