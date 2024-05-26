import { FILTER_TYPE } from "p5";

export type Tool = "Pan" | "Snip";
export type RGB = { r: number; g: number; b: number, a?: number };

export type ImageSrc = {
  src: string;
  change: boolean;
};

export type ImageFilter = {
  filter: FILTER_TYPE | "none";
  change: boolean;
};
