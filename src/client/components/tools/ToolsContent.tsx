import React from 'react';

interface ToolsContentProps {
  subHeader: string;
}

const ToolsContent: React.FC<ToolsContentProps> = ({ subHeader }) => {
  return (
    <div className="h-full flex flex-col bg-[#F5F5F5]">
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {subHeader} (Under Development)
          </h2>
          <p className="mt-4 text-gray-500">This feature is coming soon.</p>
        </div>
      </div>
    </div>
  );
}

export default ToolsContent;