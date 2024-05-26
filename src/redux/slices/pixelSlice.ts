import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Image } from "p5";

type InitialState = {
  currentImage: Image | null;
};

const initialState: InitialState = {
  currentImage: null,
};

export const pixelSlice = createSlice({
  name: "pixelArr",
  initialState,
  reducers: {
    updateImage: (state, action: PayloadAction<Image>) => {
      state.currentImage = action.payload;
    },
  },

  selectors: {
    getImage: (state) => state.currentImage,
  },
});

export const { updateImage } = pixelSlice.actions;

export const { getImage } = pixelSlice.selectors;
