import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adviseInfo: {
    data: [],
    loading: false,
    error: null,
  },
  adviseData: {
    loading: false,
    error: null,
  },
};

export const adviseSlice = createSlice({
  name: "advise",
  initialState,
  reducers: {
    //advise
    adviseRequest: (state, action) => {
      state.adviseData.loading = true;
      state.adviseData.error = null;
    },
    adviseSuccess: (state, action) => {
      state.adviseData.loading = false;
    },
    adviseFailure: (state, action) => {
      state.adviseData.loading = false;
    },
    // advise inf0
    getAdviseInfoRequest: (state, action) => {
      state.adviseInfo.loading = true;
      state.adviseInfo.error = null;
    },
    getAdviseInfoSuccess: (state, action) => {
      const { data } = action.payload;
      state.adviseInfo.data = data;
      state.adviseInfo.loading = false;
    },
    getAdviseInfoFailure: (state, action) => {
      const { error } = action.payload;
      state.adviseInfo.loading = false;
      state.adviseInfo.error = error;
    },
  },
});

export const {
  adviseRequest,
  adviseSuccess,
  adviseFailure,
  getAdviseInfoRequest,
  getAdviseInfoSuccess,
  getAdviseInfoFailure,
} = adviseSlice.actions;

export default adviseSlice.reducer;
