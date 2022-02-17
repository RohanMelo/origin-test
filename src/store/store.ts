import { configureStore } from '@reduxjs/toolkit';

import goalReducer from './slices/goalSlice';

export const store = configureStore({
  reducer: {
    goal: goalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
