import { useEffect } from 'react';
import { useThemeStore } from '../config/theme';

export const useTheme = () => {
  const { colors, setColors } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
  }, [colors]);

  return { colors, setColors };
};