import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpService } from "../../services/base.service";
import { authService } from "../../services/auth.service";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (body: any, thunkAPI) => {
    try {
      const response = await authService.login({
        ...body,
      });
      HttpService.setToken(response.data.data.access_token);
      return response.data.data;
    } catch (error: any) {
      if (error.response.data.message === "Invalid Wallet Address") {
        body.router.push("/signup");
        return thunkAPI.rejectWithValue({ walletAddress: body.walletAddress });
      } else {
        const err = error.response.data.message;
        return thunkAPI.rejectWithValue(err);
      }
    }
  }
);
