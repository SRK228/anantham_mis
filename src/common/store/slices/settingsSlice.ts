import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

const initialState: SettingsState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
    },
  },
});

export const { setTheme, setLanguage, toggleNotifications } = settingsSlice.actions;

export default settingsSlice.reducer; 