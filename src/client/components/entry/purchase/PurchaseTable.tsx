import React from 'react';

export const PurchaseTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">S.No</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Product Details</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Request Quantity</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Free Quantity</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Discount</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Purchase Rate</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 text-center text-sm text-gray-500" colSpan={7}>
              No Records To Be Shown
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};