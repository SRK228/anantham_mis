import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppName } from '@/common/types/navigation';

interface NavigationState {
  currentApp: AppName | null;
  activeHeader: string | null;
  activeSubHeader: string | null;
  isSidebarOpen: boolean;
}

const initialState: NavigationState = {
  currentApp: null,
  activeHeader: null,
  activeSubHeader: null,
  isSidebarOpen: true,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentApp: (state, action: PayloadAction<AppName | null>) => {
      state.currentApp = action.payload;
    },
    setActiveHeader: (state, action: PayloadAction<string | null>) => {
      state.activeHeader = action.payload;
      state.activeSubHeader = null; // Reset subheader when header changes
    },
    setActiveSubHeader: (state, action: PayloadAction<string | null>) => {
      state.activeSubHeader = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const {
  setCurrentApp,
  setActiveHeader,
  setActiveSubHeader,
  toggleSidebar,
  setSidebarOpen,
} = navigationSlice.actions;

export default navigationSlice.reducer;