import { ImageHistory } from "@/data/types/ComplexityMeasures";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  history: Partial<ImageHistory>[];
};

const initialState: InitialState = {
  history: [],
};

const calcIndex = (index: number, len: number) => {
  if (len === 0) return 0;
  if (index < 0) return len + index;
  if (index >= len) return index % len;
  return index;
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
  },

  selectors: {
    getHistory: (state) => state.history,
    getImageHistory: (state, index: number) =>
      state.history[calcIndex(index, state.history.length)],
  },
});

export const { addImage, updateUserMeasure } = historySlice.actions;

export const { getHistory, getImageHistory } = historySlice.selectors;
