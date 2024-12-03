import React, { useCallback, useEffect } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { SecondaryNav } from '../components/layout/SecondaryNav';
import { ContentLayout } from '../components/layout/ContentLayout';
import TabContent from '../components/TabContent';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { 
  setActiveHeader,
  setActiveSubHeader,
  setCurrentApp,
} from '../store/slices/navigationSlice';
import { PageTemplateProps } from '../types/navigation';

export const PageTemplateStandard: React.FC<PageTemplateProps> = ({
  appName,
  sidebarItems,
  defaultPath,
}) => {
  const dispatch = useAppDispatch();
  const { 
    activeHeader,
    activeSubHeader,
  } = useAppSelector(state => state.navigation);

  useEffect(() => {
    dispatch(setCurrentApp(appName));
    return () => {
      dispatch(setCurrentApp(null));
    };
  }, [dispatch, appName]);

  const activeItem = sidebarItems.find(item => item.label === activeHeader);

  const handleSubItemClick = useCallback((subItem: string) => {
    dispatch(setActiveSubHeader(subItem));
  }, [dispatch]);

  return (
    <AppLayout>
      {activeItem && activeHeader && (
        <SecondaryNav
          items={activeItem.subItems}
          activeItem={activeSubHeader}
          onItemClick={handleSubItemClick}
        />
      )}

      <ContentLayout>
        {activeSubHeader ? (
          <TabContent
            header={activeHeader}
            subHeader={activeSubHeader}
          />
        ) : (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <p>Select a module from the sidebar to get started</p>
          </div>
        )}
      </ContentLayout>
    </AppLayout>
  );
}; 