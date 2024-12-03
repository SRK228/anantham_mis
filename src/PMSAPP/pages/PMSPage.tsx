import React from 'react';
import { PageTemplateStandard } from '@/common/templates/PageTemplateStandard';
import { pmsSidebarItems } from '../data/pmsSidebarItems';

const PMSPage = () => {
  return (
    <PageTemplateStandard
      appName="PMS"
      sidebarItems={pmsSidebarItems}
      defaultPath="/pms/masters"
    />
  );
};

export default PMSPage;