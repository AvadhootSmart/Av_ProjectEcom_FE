import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetPrice = createAsyncThunk(
  "cart/getprice",
  async(_, { dispatchEvent, rejectWithValue })=>{
    const response = await axios.get()
  },
);
