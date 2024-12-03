import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  theme: 'light' | 'dark' | 'system';
  fontSize: number;
  language: string;
  tablePreferences: {
    density: 'compact' | 'comfortable' | 'spacious';
    showGridLines: boolean;
    enableAnimations: boolean;
  };
  notifications: {
    email: boolean;
    push: boolean;
    sound: boolean;
  };
}

const initialState: SettingsState = {
  theme: typeof window !== 'undefined' 
    ? (localStorage.getItem('theme') as SettingsState['theme']) || 'system'
    : 'system',
  fontSize: typeof window !== 'undefined'
    ? parseInt(localStorage.getItem('fontSize') || '16', 10)
    : 16,
  language: 'en',
  tablePreferences: {
    density: 'comfortable',
    showGridLines: true,
    enableAnimations: true,
  },
  notifications: {
    email: true,
    push: true,
    sound: true,
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('fontSize', action.payload.toString());
      }
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setTablePreferences: (state, action: PayloadAction<Partial<SettingsState['tablePreferences']>>) => {
      state.tablePreferences = { ...state.tablePreferences, ...action.payload };
    },
    setNotificationPreferences: (state, action: PayloadAction<Partial<SettingsState['notifications']>>) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
  },
});

export const {
  setTheme,
  setFontSize,
  setLanguage,
  setTablePreferences,
  setNotificationPreferences,
} = settingsSlice.actions;

export default settingsSlice.reducer;