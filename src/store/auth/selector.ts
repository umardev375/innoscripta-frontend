import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state: any) => state.auth;

export const selectUser = createSelector(selectDomain, (auth) => auth.user);
export const selectEmail = createSelector(selectDomain, (auth) => auth.resetEmail);

export const selectAccessToken = createSelector(
  selectDomain,
  (auth) => auth.access_token
);
export const selectFavourite = createSelector(
  selectDomain,
  (auth) => auth.favouriteMeme
);
