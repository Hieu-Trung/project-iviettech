import { createSlice } from "@reduxjs/toolkit";
import qs from "qs";

const locationSearch = qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    filterParams: {
      categoryId: locationSearch.categoryId
        ? locationSearch.categoryId.map((id) => parseInt(id))
        : [],
      keyword: locationSearch.keyword || "",
      sort: locationSearch.sort || undefined,
    },
  },
  reducers: {
    setFilterParams: (state, action) => {
      state.filterParams = action.payload;
    },
  },
});

export const { setFilterParams } = commonSlice.actions;

export default commonSlice.reducer;
