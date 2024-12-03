import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { PurchaseTable } from './PurchaseTable';
import { ProductDetails } from './ProductDetails';

const PurchaseEntry: React.FC = () => {
  const [purchaseDate, setPurchaseDate] = useState<string>('');

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Request Details */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Request Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Vendor Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor1">Vendor 1</SelectItem>
                  <SelectItem value="vendor2">Vendor 2</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="GST" className="bg-white" />
            </div>
            <div className="relative">
              <Input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full bg-white"
                placeholder="PR Date"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            <PurchaseTable />

            <div className="flex justify-center mt-6">
              <Button className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200">
                Send Request
              </Button>
            </div>
          </div>
        </div>

        {/* Right Panel - Product Details */}
        <ProductDetails />
      </div>
    </div>
  );
};

export default PurchaseEntry;