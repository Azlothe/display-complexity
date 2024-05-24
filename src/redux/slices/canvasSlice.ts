import { ImageFilter, ImageSrc } from "@/data/types/CanvasTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FILTER_TYPE } from "p5";

type InitialState = {
  imgSrc: ImageSrc;
  imgFilter: ImageFilter;
};

const initialState: InitialState = {
  imgSrc: {
    src: "https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
    change: true,
  },
  imgFilter: {
    filter: "none",
    change: true,
  },
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    updateImgSrc: (state, action: PayloadAction<string>) => {
      state.imgSrc.src = action.payload;
      state.imgSrc.change = true;
    },
    updateImgFilter: (state, action: PayloadAction<FILTER_TYPE>) => {
      state.imgFilter.filter = action.payload;
      state.imgFilter.change = true;
    },
    updateImgSrcChange: (state, action: PayloadAction<boolean>) => {
      state.imgSrc.change = action.payload;
    },
    updateImgFilterChange: (state, action: PayloadAction<boolean>) => {
      state.imgFilter.change = action.payload;
    },
  },

  selectors: {
    getImgSrc: (state) => state.imgSrc,
    getImgFilter: (state) => state.imgFilter,
  },
});

export const { updateImgSrc, updateImgFilter, updateImgSrcChange, updateImgFilterChange } = canvasSlice.actions;

export const { getImgSrc, getImgFilter } = canvasSlice.selectors;
