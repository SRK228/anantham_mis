import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/common/hooks/redux';

const Masters = () => {
  const location = useLocation();
  const { activeSubHeader } = useAppSelector(state => state.navigation);
  const subPath = location.pathname.split('/').pop();

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Masters - {activeSubHeader || 'Overview'}
      </h2>
      <Routes>
        <Route path="" element={
          <div className="mt-4 text-gray-500">
            Select a masters module from the secondary navigation
          </div>
        } />
        <Route path="department" element={
          <div className="mt-4">Department management coming soon</div>
        } />
        <Route path="designation" element={
          <div className="mt-4">Designation management coming soon</div>
        } />
        <Route path="employee" element={
          <div className="mt-4">Employee management coming soon</div>
        } />
        <Route path="role" element={
          <div className="mt-4">Role management coming soon</div>
        } />
        <Route path="skill" element={
          <div className="mt-4">Skill management coming soon</div>
        } />
        <Route path="kpi" element={
          <div className="mt-4">KPI management coming soon</div>
        } />
      </Routes>
    </div>
  );
};

export default Masters; 