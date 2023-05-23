import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./async.func"

const initialState = {
  user: null,
  access_token: null,
  favouriteMeme: null,
  message: "",
  submit: false,
  loading: false,
  walletConnected: false,
  chainId: "",
  resetEmail: "",
  isRegisterDone: false,
  metaMaskId: null,
  mySingupWalletAddress: null,
  walletinfo: null
};

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    error: (state, action) => {
      state.message = action.payload;
    },
    clear: (state) => {
      state.message = "";
    },
    setEmail: (state, action) => {
      state.resetEmail = action.payload;
    },

    login: (state, action) => {

      
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
  

      // state.favouriteMeme = action.payload.user.favourite
    },

    updateUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.access_token = null;
      favouriteMeme: null;
    },
    onlineUsersAction:(statw,actions)=>{

    },
    refetch: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    setWallet: (state, action) => {
      state.walletConnected = action.payload.walletConnected;
      state.chainId = action.payload.chainId;
      // state.walletinfo=action.payload
    },
  },
  extraReducers: {

  },
});

export const { reducer: authReducer, actions: authActions } = slice;
