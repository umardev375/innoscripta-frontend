import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.meme;

export const selectOriginal = createSelector(selectDomain, (meme) => meme.originalImg);
export const selectImgThumbnail = createSelector(selectDomain, (meme) => meme.imgThumbnail);
export const selectCurrentMemeDetails = createSelector(selectDomain, (meme) => meme.currentMeme);
export const selectMoreFromOwner = createSelector(selectDomain, (meme) => meme.memeDetailOwner);
