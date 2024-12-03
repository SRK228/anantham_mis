import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slices/navigationSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;