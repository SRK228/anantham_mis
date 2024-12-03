import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun, Monitor, ArrowLeft } from 'lucide-react';
import { Button } from '@/client/components/ui/button';
import { Label } from '@/client/components/ui/label';
import { Switch } from '@/client/components/ui/switch';
import { Slider } from '@/client/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/client/components/ui/select';
import { RootState } from '@/client/store';
import {
  setTheme,
  setFontSize,
  setLanguage,
  setTablePreferences,
  setNotificationPreferences,
} from '@/client/store/slices/settingsSlice';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const handleThemeChange = (value: 'light' | 'dark' | 'system') => {
    dispatch(setTheme(value));
  };

  const handleFontSizeChange = (value: number[]) => {
    dispatch(setFontSize(value[0]));
  };

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  const handleTablePreferenceChange = (key: keyof typeof settings.tablePreferences, value: any) => {
    dispatch(setTablePreferences({ [key]: value }));
  };

  const handleNotificationChange = (key: keyof typeof settings.notifications, value: boolean) => {
    dispatch(setNotificationPreferences({ [key]: value }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Button variant="ghost" size="icon" onClick={handleBack} className="mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-6 space-y-8">
          {/* Theme Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theme</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-3 rounded-lg flex items-center space-x-2 ${
                  settings.theme === 'light' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
              >
                <Sun className="h-5 w-5" />
                <span>Light</span>
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-3 rounded-lg flex items-center space-x-2 ${
                  settings.theme === 'dark' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
              >
                <Moon className="h-5 w-5" />
                <span>Dark</span>
              </button>
              <button
                onClick={() => handleThemeChange('system')}
                className={`p-3 rounded-lg flex items-center space-x-2 ${
                  settings.theme === 'system' ? 'bg-primary text-white' : 'bg-gray-100'
                }`}
              >
                <Monitor className="h-5 w-5" />
                <span>System</span>
              </button>
            </div>
          </div>

          {/* Font Size Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Font Size</h3>
            <div className="w-full max-w-xs space-y-2">
              <Slider
                value={[settings.fontSize]}
                onValueChange={handleFontSizeChange}
                min={12}
                max={20}
                step={1}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>12px</span>
                <span>16px</span>
                <span>20px</span>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Language</h3>
            <Select value={settings.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Table Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="density">Density</Label>
                <Select
                  value={settings.tablePreferences.density}
                  onValueChange={(value) => handleTablePreferenceChange('density', value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select density" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                    <SelectItem value="spacious">Spacious</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="gridlines">Show Grid Lines</Label>
                <Switch
                  id="gridlines"
                  checked={settings.tablePreferences.showGridLines}
                  onCheckedChange={(checked) => handleTablePreferenceChange('showGridLines', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="animations">Enable Animations</Label>
                <Switch
                  id="animations"
                  checked={settings.tablePreferences.enableAnimations}
                  onCheckedChange={(checked) => handleTablePreferenceChange('enableAnimations', checked)}
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email">Email Notifications</Label>
                <Switch
                  id="email"
                  checked={settings.notifications.email}
                  onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push">Push Notifications</Label>
                <Switch
                  id="push"
                  checked={settings.notifications.push}
                  onCheckedChange={(checked) => handleNotificationChange('push', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sound">Sound Notifications</Label>
                <Switch
                  id="sound"
                  checked={settings.notifications.sound}
                  onCheckedChange={(checked) => handleNotificationChange('sound', checked)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;