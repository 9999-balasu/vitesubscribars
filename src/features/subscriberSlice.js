/*import { createSlice } from '@reduxjs/toolkit';

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
export default subscriberSlice.reducer;*/



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  names: [],
};

const getBadge = (count) => {
  if (count >= 11) return '🔮 Expert';
  if (count >= 6) return '🔵 Intermediate';
  return '🟢 Beginner';
};

const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {
    addSubscriber: (state, action) => {
      const badge = getBadge(state.count + 1);
      state.names.push({ name: action.payload, badge });
      state.count += 1;
    },
  },
});
export const { addSubscriber } = subscriberSlice.actions;
export default subscriberSlice.reducer;