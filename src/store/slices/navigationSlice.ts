import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentApp: string | null;
  activeHeader: string | null;
  activeSubHeader: string | null;
  isLoading: boolean;
}

const initialState: NavigationState = {
  currentApp: null,
  activeHeader: null,
  activeSubHeader: null,
  isLoading: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentApp: (state, action: PayloadAction<string | null>) => {
      state.currentApp = action.payload;
    },
    setActiveHeader: (state, action: PayloadAction<string | null>) => {
      state.activeHeader = action.payload;
    },
    setActiveSubHeader: (state, action: PayloadAction<string | null>) => {
      state.activeSubHeader = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setCurrentApp,
  setActiveHeader,
  setActiveSubHeader,
  setLoading,
} = navigationSlice.actions;

export default navigationSlice.reducer; 