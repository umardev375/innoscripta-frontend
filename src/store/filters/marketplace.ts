import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  title: "",
  price: 0,
  ranking: "",
  trending: "",
  message: "",
};

const slice = createSlice({
  name: "marketplace",
  initialState: initialState,
  reducers: {
    error: (state, action) => {
      state.message = action.payload;
    },
    memeType: (state, action) => {
        state.type = action.payload
    },
    memeTitle: (state, action) => {
        state.title = action.payload
    },
    memePrice: (state, action) => {
        state.price = action.payload
    },
    memeRanking: (state, action) => {
        state.ranking = action.payload
    },
    trendingMeme: (state, action) => {
      state.trending = action.payload
  },

    clear: (state) => {
        state.type = "";
        state.title = "";
        state.price = 0;
        state.ranking = "";
        state.trending = ""
    },
  },
  extraReducers: {
  },
});

export const { reducer: marketplaceReducer, actions: marketplaceActions } = slice;
