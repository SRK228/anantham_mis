import React, { Suspense, memo } from 'react';
import MastersContent from './masters/MastersContent';
import DashboardContent from './dashboard/DashboardContent';
import EntryContent from './entry/EntryContent';
import ReportsContent from './reports/ReportsContent';
import SetupContent from './setup/SetupContent';

interface TabContentProps {
  header: string;
  subHeader: string;
}

const LoadingFallback = () => (
  <div className="h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const TabContent: React.FC<TabContentProps> = memo(({ header, subHeader }) => {
  const renderContent = () => {
    try {
      switch (header) {
        case 'Masters':
          return <MastersContent subHeader={subHeader} />;
        case 'Dashboard':
          return <DashboardContent subHeader={subHeader} />;
        case 'Entry':
          return <EntryContent subHeader={subHeader} />;
        case 'Reports':
          return <ReportsContent subHeader={subHeader} />;
        case 'Setup':
          return <SetupContent subHeader={subHeader} />;
        default:
          return (
            <div className="h-full flex flex-col bg-white">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {header} - {subHeader} (Under Development)
                </h2>
              </div>
              <div className="flex-1 p-4">
                <p className="text-gray-500">This feature is coming soon.</p>
              </div>
            </div>
          );
      }
    } catch (error) {
      console.error('Error rendering content:', error);
      return (
        <div className="h-full flex items-center justify-center text-red-500">
          Failed to load content. Please try again.
        </div>
      );
    }
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      {renderContent()}
    </Suspense>
  );
});

TabContent.displayName = 'TabContent';

export default TabContent;