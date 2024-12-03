import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* Feature Area - 3cm gap for future features */}
      <div className="h-[3cm] bg-[#F5F5F5] px-6" id="feature-area" />
      
      {/* Main Content */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};