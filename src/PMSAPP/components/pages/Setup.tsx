import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/common/hooks/redux';

const Setup = () => {
  const { activeSubHeader } = useAppSelector(state => state.navigation);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Setup - {activeSubHeader || 'Overview'}
      </h2>
      <Routes>
        <Route path="" element={
          <div className="mt-4 text-gray-500">
            Select a setup option from the secondary navigation
          </div>
        } />
        <Route path="review-cycle" element={
          <div className="mt-4">Review cycle setup coming soon</div>
        } />
        <Route path="evaluation-criteria" element={
          <div className="mt-4">Evaluation criteria setup coming soon</div>
        } />
        <Route path="workflow" element={
          <div className="mt-4">Workflow setup coming soon</div>
        } />
      </Routes>
    </div>
  );
};

export default Setup; 