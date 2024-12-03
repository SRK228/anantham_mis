import React from 'react';
import { ColorPicker } from './ColorPicker';
import { useTheme } from '../../hooks/useTheme';

export const ThemeSettings: React.FC = () => {
  const { colors, setColors } = useTheme();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Theme Colors</h3>
      <div className="space-y-4">
        <ColorPicker
          label="Primary Color"
          value={colors.primary}
          onChange={(value) => setColors({ primary: value })}
        />
        <ColorPicker
          label="Secondary Color"
          value={colors.secondary}
          onChange={(value) => setColors({ secondary: value })}
        />
        <ColorPicker
          label="Accent Color"
          value={colors.accent}
          onChange={(value) => setColors({ accent: value })}
        />
      </div>
    </div>
  );
};