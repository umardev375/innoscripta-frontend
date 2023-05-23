import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.marketplace;

export const selectMemeType = createSelector(selectDomain, (meme) => meme.type);
export const selectMemeTitle = createSelector(selectDomain, (meme) => meme.title);
export const selectMemePrice = createSelector(selectDomain, (meme) => meme.price);
export const selectMemeRanking = createSelector(selectDomain, (meme) => meme.ranking);
export const selectTrendingMeme = createSelector(selectDomain, (meme) => meme.trending);
