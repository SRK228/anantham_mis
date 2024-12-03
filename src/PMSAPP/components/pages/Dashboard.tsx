import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/common/hooks/redux';

const Dashboard = () => {
  const { activeSubHeader } = useAppSelector(state => state.navigation);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Dashboard - {activeSubHeader || 'Overview'}
      </h2>
      <Routes>
        <Route path="" element={
          <div className="mt-4 text-gray-500">
            Select a dashboard view from the secondary navigation
          </div>
        } />
        <Route path="overview" element={
          <div className="mt-4">Dashboard overview coming soon</div>
        } />
        <Route path="analytics" element={
          <div className="mt-4">Analytics dashboard coming soon</div>
        } />
        <Route path="team-performance" element={
          <div className="mt-4">Team performance dashboard coming soon</div>
        } />
      </Routes>
    </div>
  );
};

export default Dashboard; 