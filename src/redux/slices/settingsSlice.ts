import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  toggleAI: boolean;
  auto : boolean;
};

const initialState: InitialState = {
    toggleAI : false,
    auto : true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateAIToggle: (state, action: PayloadAction<boolean>) => {
        state.toggleAI = action.payload;
    },
    updateAuto: (state, action: PayloadAction<boolean>) => {
        state.auto = action.payload;
    },
  },

  selectors: {
    getAIToggle: (state) => state.toggleAI,
    getAuto: (state) => state.auto,
  },
});

export const { updateAIToggle, updateAuto } = settingsSlice.actions;

export const { getAIToggle, getAuto } = settingsSlice.selectors;
