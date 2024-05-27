import ColorConstants from "@/data/constants/ColorConstants";
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
  canvasBG: ColorConstants.CANVAS_BG,
  topBG: localStorage.getItem("topBG") ?? ColorConstants.DEFAULT_BG,
  bottomBG: localStorage.getItem("bottomBG") ?? ColorConstants.DEFAULT_BG,
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
      localStorage.setItem("topBG", state.topBG);
    },
    updateBottomBG: (state, action: PayloadAction<string>) => {
      state.bottomBG = action.payload;
      localStorage.setItem("bottomBG", state.bottomBG);
    },
    resetAllBG: (state) => {
      state.canvasBG = ColorConstants.CANVAS_BG;
      state.topBG = ColorConstants.DEFAULT_BG;
      state.bottomBG = ColorConstants.DEFAULT_BG;

      localStorage.removeItem("topBG");
      localStorage.removeItem("bottomBG");
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
  resetAllBG,
} = settingsSlice.actions;

export const { getAIToggle, getAuto, getCanvasBG, getTopBG, getBottomBG } =
  settingsSlice.selectors;
