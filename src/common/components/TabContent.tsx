import React from 'react';

interface TabContentProps {
  header: string;
  subHeader: string;
}

const TabContent: React.FC<TabContentProps> = ({ header, subHeader }) => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        {header} - {subHeader}
      </h2>
      <div className="mt-4">
        <p className="text-gray-600">Content for {subHeader} will be implemented here.</p>
      </div>
    </div>
  );
};

export default TabContent; 