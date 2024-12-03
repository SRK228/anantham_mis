import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PersonOutlined,
  NotificationsOutlined,
  SecurityOutlined,
  StorageOutlined,
  PaletteOutlined,
  LanguageOutlined,
  ArrowBackOutlined
} from '@mui/icons-material';
import { Button } from '@/common/components/ui/button';
import { cn } from '@/common/lib/utils';

interface SettingsSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick?: () => void;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  icon: Icon,
  title,
  description,
  onClick
}) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full p-4 flex items-start gap-4 rounded-lg",
      "text-left transition-colors duration-200",
      "hover:bg-[#ff8080]/5 focus:outline-none focus:ring-2 focus:ring-[#ff8080]/20"
    )}
  >
    <div className="p-2 rounded-full bg-[#ff8080]/10">
      <Icon className="h-6 w-6 text-[#ff8080]" />
    </div>
    <div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </button>
);

export const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="hover:bg-[#ff8080]/5"
              >
                <ArrowBackOutlined className="h-5 w-5 text-gray-600" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          <SettingsSection
            icon={PersonOutlined}
            title="Profile Settings"
            description="Manage your account details and preferences"
          />
          <SettingsSection
            icon={NotificationsOutlined}
            title="Notifications"
            description="Configure how you receive alerts and notifications"
          />
          <SettingsSection
            icon={SecurityOutlined}
            title="Security"
            description="Password settings and security preferences"
          />
          <SettingsSection
            icon={StorageOutlined}
            title="Data Management"
            description="Manage your data, backups, and storage preferences"
          />
          <SettingsSection
            icon={PaletteOutlined}
            title="Appearance"
            description="Customize the look and feel of your application"
          />
          <SettingsSection
            icon={LanguageOutlined}
            title="Language & Region"
            description="Set your preferred language and regional settings"
          />
        </div>
      </div>
    </div>
  );
};