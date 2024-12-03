import React from 'react';
import { PageTemplateStandard } from '@/common/templates/PageTemplateStandard';
import { misSidebarItems } from '../config/sidebarConfig';

const MISPage = () => {
  return (
    <PageTemplateStandard
      appName="MIS"
      sidebarItems={misSidebarItems}
      defaultPath="/mis/masters"
    />
  );
};

export default MISPage;