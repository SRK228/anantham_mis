import React, { Suspense, memo } from 'react';
import { toast } from 'sonner';
import { ItemTable } from './tables/ItemTable';
import { ProductTable } from './tables/ProductTable';
import { BrandTable } from './tables/BrandTable';
import { TypeTable } from './tables/TypeTable';
import { StyleTable } from './tables/StyleTable';
import { PatternTable } from './tables/PatternTable';
import { VarietyTable } from './tables/VarietyTable';
import { ColourTable } from './tables/ColourTable';
import { SizeTable } from './tables/SizeTable';
import { EmployeeTable } from './tables/EmployeeTable';
import { PurchaserTable } from './tables/PurchaserTable';

const LoadingFallback = () => (
  <div className="h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff8080]"></div>
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
          return <ItemTable />;
        case 'Product':
          return <ProductTable />;
        case 'Brand':
          return <BrandTable />;
        case 'Type':
          return <TypeTable />;
        case 'Style':
          return <StyleTable />;
        case 'Pattern':
          return <PatternTable />;
        case 'Variety':
          return <VarietyTable />;
        case 'Colour':
          return <ColourTable />;
        case 'Size':
          return <SizeTable />;
        case 'Employee':
          return <EmployeeTable />;
        case 'Purchaser':
          return <PurchaserTable />;
        default:
          return (
            <div className="flex items-center justify-center h-64 text-gray-500">
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