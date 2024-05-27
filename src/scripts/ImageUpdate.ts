import { ImageFilter, ImageSrc } from "@/data/types/CanvasTypes";
import { FILTER_TYPE } from "p5";

export const updateSrc = (imgSrc : ImageSrc, newSrc : string) => {
    imgSrc.src = newSrc;
    imgSrc.change = true;
}

export const updateFilter = (imgFilter : ImageFilter, newFilter : FILTER_TYPE) => {
    imgFilter.filter = newFilter;
    imgFilter.change = true;
}