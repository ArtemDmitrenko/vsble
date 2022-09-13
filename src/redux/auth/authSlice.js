import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    role: null,
    error: null,
    isAuth: false,
  },
  reducers: {
    setAuthUserData(state, action) {
      const {
        data: { id, role },
        errors,
        success,
      } = action.payload;
      state.userId = id;
      state.role = role;
      state.error = errors;
      state.isAuth = success;
    },
  },
});

export default authSlice.reducer;
export const { setAuthUserData } = authSlice.actions;
