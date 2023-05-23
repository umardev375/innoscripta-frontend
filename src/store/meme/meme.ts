import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  originalImg: null,
  imgThumbnail: null,
  currentMeme: null,
  memeDetailOwner: null,
  message: "",
};

const slice = createSlice({
  name: "meme",
  initialState: initialState,
  reducers: {
    error: (state, action) => {
      state.message = action.payload;
    },
    clear: (state) => {
        state.originalImg = null;
        state.imgThumbnail = null;
        state.currentMeme = null;
    },
    editMeme: (state, action) => {
      state.originalImg = action.payload.originalImg
      state.imgThumbnail = action.payload.thumbnail
    },
    currentMemeDetails: (state, action) => {
      state.currentMeme = action.payload
    },
    moreFromOwner:(state, action) => {
      state.memeDetailOwner = action.payload
    },
  },
  extraReducers: {
  },
});

export const { reducer: memeReducer, actions: memeActions } = slice;
