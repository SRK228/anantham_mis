import React from 'react';
import PurchaseEntry from './purchase/PurchaseEntry';

interface EntryContentProps {
  subHeader: string;
}

const EntryContent: React.FC<EntryContentProps> = ({ subHeader }) => {
  switch (subHeader) {
    case 'Purchase Entry':
      return <PurchaseEntry />;
    default:
      return (
        <div className="h-full flex flex-col bg-white">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {subHeader} (Under Development)
            </h2>
          </div>
          <div className="flex-1 p-4">
            <p className="text-gray-500">This feature is coming soon.</p>
          </div>
        </div>
      );
  }
};

export default EntryContent;