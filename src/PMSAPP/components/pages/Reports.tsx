import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/common/hooks/redux';

const Reports = () => {
  const { activeSubHeader } = useAppSelector(state => state.navigation);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Reports - {activeSubHeader || 'Overview'}
      </h2>
      <Routes>
        <Route path="" element={
          <div className="mt-4 text-gray-500">
            Select a report type from the secondary navigation
          </div>
        } />
        <Route path="performance-reports" element={
          <div className="mt-4">Performance reports coming soon</div>
        } />
        <Route path="training-reports" element={
          <div className="mt-4">Training reports coming soon</div>
        } />
        <Route path="analytics-reports" element={
          <div className="mt-4">Analytics reports coming soon</div>
        } />
      </Routes>
    </div>
  );
};

export default Reports; 