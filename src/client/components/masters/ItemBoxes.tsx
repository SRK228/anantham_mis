import React from 'react';
import { Package, BarChart2 } from 'lucide-react';

export const ItemBoxes: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="bg-[#F5F5F5] p-6 rounded-lg border border-gray-300 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Total Items</h3>
            <p className="text-3xl font-bold text-primary mt-2">1,234</p>
          </div>
          <Package className="h-12 w-12 text-primary opacity-80" />
        </div>
      </div>
      
      <div className="bg-[#F5F5F5] p-6 rounded-lg border border-gray-300 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Active Items</h3>
            <p className="text-3xl font-bold text-primary mt-2">987</p>
          </div>
          <BarChart2 className="h-12 w-12 text-primary opacity-80" />
        </div>
      </div>
    </div>
  );
};