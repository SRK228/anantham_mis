import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './client/pages/LoginPage';
import PMSPage from './PMSAPP/pages/PMSPage';
import MISPage from './MISAPP/pages/MISPage';
import LandingPage from './pages/LandingPage';
import { SettingsPage } from './common/pages/settings/SettingsPage';
import ProtectedRoute from './common/components/ProtectedRoute';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pms/*"
        element={
          <ProtectedRoute>
            <PMSPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mis/*"
        element={
          <ProtectedRoute>
            <MISPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      {/* Redirect all unmatched routes to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}; 