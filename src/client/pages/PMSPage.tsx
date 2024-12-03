import React, { useCallback } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { SecondaryNav } from '../components/layout/SecondaryNav';
import { ContentLayout } from '../components/layout/ContentLayout';
import TabContent from '../components/pms/TabContent';
import { pmsSidebarItems } from '../data/pmsSidebarItems';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { 
  setActiveHeader,
  setActiveSubHeader,
} from '../store/slices/navigationSlice';

const PMSPage = () => {
  const dispatch = useAppDispatch();
  const { 
    activeHeader,
    activeSubHeader,
  } = useAppSelector(state => state.navigation);

  const activeItem = pmsSidebarItems.find(item => item.label === activeHeader);

  const handleHeaderClick = useCallback((label: string) => {
    dispatch(setActiveHeader(label));
  }, [dispatch]);

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

export default PMSPage;