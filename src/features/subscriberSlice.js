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



/*import { createSlice } from '@reduxjs/toolkit';

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
export default subscriberSlice.reducer;*/

/*import { createSlice } from '@reduxjs/toolkit';

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
      state.names.push({ name: action.payload, badge, likes: 0, joinedAt: new Date().toLocaleString() });
      state.count += 1;
    },
    likeSubscriber: (state, action) => {
      const subscriber = state.names.find((sub, index) => index === action.payload);
      if (subscriber) {
        subscriber.likes += 1;
      }
    },
  },
});

export const { addSubscriber, likeSubscriber } = subscriberSlice.actions;
export default subscriberSlice.reducer;*/
/*import { createSlice } from '@reduxjs/toolkit';

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
      state.names.push(action.payload);
      state.count += 1;
    },
    likeSubscriber: (state, action) => {
      const subscriber = state.names.find((sub, index) => index === action.payload);
      if (subscriber) {
        subscriber.likes += 1;
      }
    },
  },
});

export const { addSubscriber, likeSubscriber } = subscriberSlice.actions;
export default subscriberSlice.reducer;
*/


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

const analyzeComment = (comment) => {
  const badWords = ['bad', 'worst', 'terrible', 'awful', 'horrible', 'dangerous'];
  const isNegative = badWords.some(word => comment.toLowerCase().includes(word));
  if (isNegative) {
    console.warn('🚨 Negative comment detected! Logging to police station...');
    // Simulating a report to a police station database
  }
  return isNegative ? '❌ Negative' : '✅ Positive';
};

const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {
    addSubscriber: (state, action) => {
      state.names.push(action.payload);
      state.count += 1;
    },
    likeSubscriber: (state, action) => {
      const subscriber = state.names.find((sub, index) => index === action.payload);
      if (subscriber) {
        subscriber.likes += 1;
      }
    },
    addComment: (state, action) => {
      const { index, comment } = action.payload;
      if (state.names[index]) {
        state.names[index].comment = comment;
        state.names[index].commentStatus = analyzeComment(comment);
      }
    },
  },
});

export const { addSubscriber, likeSubscriber, addComment } = subscriberSlice.actions;
export default subscriberSlice.reducer;
