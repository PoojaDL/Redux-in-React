import { configureStore, createSlice } from "@reduxjs/toolkit";

const initAuth = { isAuthenticated: false };

const authSlice = createSlice({
  name: "Authentication",
  initialState: initAuth,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const initState = { counter: 0, showCounter: true };

const sliceCreated = createSlice({
  name: "name",
  initialState: initState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggler(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const reduxStore = configureStore({
  reducer: { counter: sliceCreated.reducer, auth: authSlice.reducer },
});
export const authReducerAction = authSlice.actions;
export const reducerAction = sliceCreated.actions;
export default reduxStore;
