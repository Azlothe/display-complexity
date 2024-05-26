import { RGB } from "@/data/types/CanvasTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  toggleAI: boolean;
  auto: boolean;
  canvasBG: RGB;
  topBG: string;
  bottomBG: string;
};

const initialState: InitialState = {
  toggleAI: false,
  auto: true,
  canvasBG: {
    r: 255,
    g: 255,
    b: 255,
    a: 255,
  },
  topBG: "#ffffff",
  bottomBG: "#ffffff",
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
    updateCanvasBG: (state, action: PayloadAction<RGB>) => {
      state.canvasBG = action.payload;
    },
    updateTopBG: (state, action: PayloadAction<string>) => {
      state.topBG = action.payload;
    },
    updateBottomBG: (state, action: PayloadAction<string>) => {
      state.bottomBG = action.payload;
    },
  },

  selectors: {
    getAIToggle: (state) => state.toggleAI,
    getAuto: (state) => state.auto,
    getCanvasBG: (state) => state.canvasBG,
    getTopBG: (state) => state.topBG,
    getBottomBG: (state) => state.bottomBG,
  },
});

export const {
  updateAIToggle,
  updateAuto,
  updateCanvasBG,
  updateTopBG,
  updateBottomBG,
} = settingsSlice.actions;

export const { getAIToggle, getAuto, getCanvasBG, getTopBG, getBottomBG } =
  settingsSlice.selectors;
