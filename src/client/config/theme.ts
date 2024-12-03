import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
}

interface ThemeState {
  colors: ThemeColors;
  setColors: (colors: Partial<ThemeColors>) => void;
}

const defaultColors: ThemeColors = {
  primary: '#ff8080',
  secondary: '#ff9999',
  accent: '#ffb3b3'
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      colors: defaultColors,
      setColors: (newColors) => 
        set((state) => ({ 
          colors: { ...state.colors, ...newColors } 
        })),
    }),
    {
      name: 'theme-storage',
    }
  )
);