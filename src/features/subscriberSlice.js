import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  names: [],
};

const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {
    addSubscriber: (state, action) => {
      state.names.push(action.payload);
      state.count += 1;
    },
  },
});

export const { addSubscriber } = subscriberSlice.actions;
export default subscriberSlice.reducer;