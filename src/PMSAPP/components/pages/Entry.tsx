import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@/common/hooks/redux';

const Entry = () => {
  const { activeSubHeader } = useAppSelector(state => state.navigation);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Entry - {activeSubHeader || 'Overview'}
      </h2>
      <Routes>
        <Route path="" element={
          <div className="mt-4 text-gray-500">
            Select an entry type from the secondary navigation
          </div>
        } />
        <Route path="performance-review" element={
          <div className="mt-4">Performance review entry coming soon</div>
        } />
        <Route path="goal-setting" element={
          <div className="mt-4">Goal setting entry coming soon</div>
        } />
        <Route path="training" element={
          <div className="mt-4">Training entry coming soon</div>
        } />
      </Routes>
    </div>
  );
};

export default Entry; 