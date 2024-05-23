import { Pixel } from "@/data/types/Pixels";

export const condensePixelArray = (pixelArr: number[]) => {
  const condensed: Pixel[] = [];
  for (let i = 0; i < pixelArr.length; i += 4) {
    condensed.push({
      r: pixelArr[i],
      g: pixelArr[i + 1],
      b: pixelArr[i + 2],
      a: pixelArr[i + 3],
    });
  }
  return condensed;
};
