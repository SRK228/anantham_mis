import React from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

export const ProductDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Product Details</h2>
      <div className="space-y-4">
        <Select>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Brand Name *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="brand1">Brand 1</SelectItem>
            <SelectItem value="brand2">Brand 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Generic Name *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="generic1">Generic 1</SelectItem>
            <SelectItem value="generic2">Generic 2</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Dosage Type *" className="bg-white" />
          <Input placeholder="Dosage Strength *" className="bg-white" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Request Qty (Nos)*" type="number" className="bg-white" />
          <Input placeholder="Free Quantity (Units)" type="number" className="bg-white" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Purchase Rate" type="number" className="bg-white" />
          <Input placeholder="Request Discount" type="number" className="bg-white" />
        </div>

        <div className="flex justify-end space-x-2">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 transition-colors duration-200"
          >
            Clear
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};