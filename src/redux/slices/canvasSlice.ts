import { ImageFilter, ImageSrc } from "@/data/types/CanvasTypes";
import { ImageComplexity, ImageHistory } from "@/data/types/ComplexityMeasures";
import { calcIndex } from "@/scripts/CalculateIndex";
import { updateFilter, updateSrc } from "@/scripts/ImageUpdate";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FILTER_TYPE } from "p5";

type InitialState = {
  imgSrc: ImageSrc;
  imgFilter: ImageFilter;
  history: Partial<ImageHistory>[];
  currentIndex: number;
  currentNew: boolean;
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
  history: [],
  currentIndex: -1,
  currentNew: true,
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    updateImgSrc: (state, action: PayloadAction<string>) => {
      updateSrc(state.imgSrc, action.payload);
    },
    updateImgFilter: (state, action: PayloadAction<FILTER_TYPE>) => {
      updateFilter(state.imgFilter, action.payload);
    },
    updateImgSrcChange: (state, action: PayloadAction<boolean>) => {
      state.imgSrc.change = action.payload;
    },
    updateImgFilterChange: (state, action: PayloadAction<boolean>) => {
      state.imgFilter.change = action.payload;
    },
    addImage: {
      prepare(src: string) {
        return {
          payload: {
            image: {
              src: src,
            },
            complexity: {},
          },
        };
      },

      reducer: (state, action: PayloadAction<Partial<ImageHistory>>) => {
        if (
          state.history.some(
            (el) => el.image!.src === action.payload.image!.src
          )
        ) {
          state.currentNew = false;
          return;
        }

        action.payload.image!.labels = [`Img ${state.history.length}`];
        state.history.push(action.payload);
        ++state.currentIndex;
        state.currentNew = true;
      },
    },
    updateUserMeasure: {
      prepare(index: number, newMeasure: number) {
        return {
          payload: { index, newMeasure },
        };
      },

      reducer: (
        state,
        action: PayloadAction<{ index: number; newMeasure: number }>
      ) => {
        const { index, newMeasure } = action.payload;
        state.history[calcIndex(index, state.history.length)].complexity!.user =
          newMeasure;
      },
    },
    updateCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = calcIndex(
        state.currentIndex + action.payload,
        state.history.length
      );
      updateSrc(state.imgSrc, state.history[state.currentIndex].image!.src);
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = calcIndex(action.payload, state.history.length);
      updateSrc(state.imgSrc, state.history[state.currentIndex].image!.src);
    },
    updateCurrentComplexityMeasure: (
      state,
      action: PayloadAction<ImageComplexity>
    ) => {
      const currentImage = state.history[state.currentIndex];
      console.log("current index", state.currentIndex)
      console.log("passed in complexity", action.payload)
      if (!currentImage) return;
      
      currentImage.complexity = action.payload;
    },
    setCurrentNew: (state, action: PayloadAction<boolean>) => {
      state.currentNew = action.payload;
    },
  },

  selectors: {
    getImgSrc: (state) => state.imgSrc,
    getImgFilter: (state) => state.imgFilter,
    getHistory: (state) => state.history,
    getImageHistory: (state, index: number) =>
      state.history[calcIndex(index, state.history.length)],
    getImagesSrc: (state) => state.history.map((el) => el.image!.src),
    getCurrentImage: (state) => state.history[state.currentIndex],
    getCurrentIndex: (state) => state.currentIndex,
    getHistoryLength: (state) => state.history.length,
    getCurrentNew: (state) => state.currentNew,
  },
});

export const {
  updateImgSrc,
  updateImgFilter,
  updateImgSrcChange,
  updateImgFilterChange,
  addImage,
  updateUserMeasure,
  updateCurrentIndex,
  setCurrentIndex,
  updateCurrentComplexityMeasure,
  setCurrentNew,
} = canvasSlice.actions;

export const {
  getImgSrc,
  getImgFilter,
  getHistory,
  getImageHistory,
  getImagesSrc,
  getCurrentImage,
  getCurrentIndex,
  getHistoryLength,
  getCurrentNew,
} = canvasSlice.selectors;
