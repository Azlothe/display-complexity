import { ImageHistory } from "@/data/types/ComplexityMeasures";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
};

const initialState: InitialState = {
};


export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
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
        action.payload.image!.labels = [`Img ${state.history.length}`];
        state.history.push(action.payload);
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
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = calcIndex(action.payload, state.history.length);
    },
  },

  selectors: {
    getHistory: (state) => state.history,
    getImageHistory: (state, index: number) =>
      state.history[calcIndex(index, state.history.length)],
    getImagesSrc: (state) => state.history.map((el) => el.image!.src),
    getCurrentImage: (state) => state.history[state.currentIndex],
  },
});

export const { addImage, updateUserMeasure, updateCurrentIndex, setCurrentIndex } = historySlice.actions;

export const { getHistory, getImageHistory, getImagesSrc, getCurrentImage } =
  historySlice.selectors;
