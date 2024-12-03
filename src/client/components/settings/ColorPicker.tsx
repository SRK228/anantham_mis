import React from 'react';
import { Label } from '../ui/label';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor={label}>{label}</Label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          id={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2 py-1 text-sm border rounded"
        />
      </div>
    </div>
  );
};