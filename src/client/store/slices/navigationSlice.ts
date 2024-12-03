import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  activeHeader: string;
  activeSubHeader: string;
  isSidebarOpen: boolean;
}

const initialState: NavigationState = {
  activeHeader: 'Masters',
  activeSubHeader: '',
  isSidebarOpen: true,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveHeader: (state, action: PayloadAction<string>) => {
      state.activeHeader = action.payload;
      state.activeSubHeader = '';
    },
    setActiveSubHeader: (state, action: PayloadAction<string>) => {
      state.activeSubHeader = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { 
  setActiveHeader, 
  setActiveSubHeader,
  toggleSidebar,
} = navigationSlice.actions;

export default navigationSlice.reducer;