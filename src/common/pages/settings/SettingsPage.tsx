import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { AppLayout } from '../../components/layout/AppLayout';

export const SettingsPage: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            {/* User Profile Section */}
            <div>
              <h2 className="text-lg font-medium mb-4">User Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1 text-sm text-gray-900">{user?.name}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 text-sm text-gray-900">{user?.email}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <div className="mt-1 text-sm text-gray-900">{user?.role}</div>
                </div>
              </div>
            </div>

            {/* Application Settings */}
            <div>
              <h2 className="text-lg font-medium mb-4">Application Settings</h2>
              <div className="space-y-4">
                {/* Add your application settings here */}
                <p className="text-sm text-gray-500">Application settings will be implemented here.</p>
              </div>
            </div>

            {/* System Information */}
            <div>
              <h2 className="text-lg font-medium mb-4">System Information</h2>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Version</label>
                  <div className="mt-1 text-sm text-gray-900">1.0.0</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Updated</label>
                  <div className="mt-1 text-sm text-gray-900">{new Date().toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}; 