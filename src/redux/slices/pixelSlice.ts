import { Pixel } from "@/data/types/Pixels";
import { condensePixelArray } from "@/scripts/PixelMapper";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Image } from "p5";

type InitialState = {
  pixelArr: Pixel[];
  currentImage: Image | null;
};

const initialState: InitialState = {
  pixelArr: [],
  currentImage: null,
};

export const pixelSlice = createSlice({
  name: "pixelArr",
  initialState,
  reducers: {
    updatePixels: {
      prepare(expandedPixels: number[]) {
        return {
          payload: condensePixelArray(expandedPixels),
        };
      },
      reducer: (state, action: PayloadAction<Pixel[]>) => {
        state.pixelArr = action.payload;
      },
    },
    updateImage: (state, action: PayloadAction<Image>) => {
      state.currentImage = action.payload;
    },
  },

  selectors: {
    getPixelArr: (state) => state.pixelArr,
    getImage: (state) => state.currentImage,
  },
});

export const { updatePixels, updateImage } = pixelSlice.actions;

export const { getPixelArr, getImage } = pixelSlice.selectors;
