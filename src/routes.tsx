import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import MISPage from '@/MISAPP/pages/MISPage';
import PMSPage from '@/PMSAPP/pages/PMSPage';
import { SettingsPage } from '@/common/pages/settings/SettingsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mis/*" element={<MISPage />} />
      <Route path="/pms/*" element={<PMSPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}; 