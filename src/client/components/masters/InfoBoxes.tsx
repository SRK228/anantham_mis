import React from 'react';
import { Package, BarChart2 } from 'lucide-react';

export const InfoBoxes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#F5F5F5]">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Total Items</h3>
            <p className="text-3xl font-bold text-primary mt-2">1,234</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-lg">
            <Package className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Active Items</h3>
            <p className="text-3xl font-bold text-primary mt-2">987</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-lg">
            <BarChart2 className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};