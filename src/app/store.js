import { configureStore } from '@reduxjs/toolkit';
import subscriberReducer from '../features/subscriberSlice';

export const store = configureStore({
  reducer: {
    subscriber: subscriberReducer,
  },
});
