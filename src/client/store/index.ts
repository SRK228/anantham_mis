import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slices/navigationSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;