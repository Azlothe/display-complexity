import { Pixel } from "@/data/types/Pixels";

const totalPixels = (pixels : Pixel[]) => pixels.length;

export const convolutionData = (pixels : Pixel[]) => {
    return (pixels.reduce((acc, pixel) => acc + (pixel.r >= 200 ? 1 : 0), 0)/totalPixels(pixels));
}