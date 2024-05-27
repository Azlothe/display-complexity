import { Pixel } from "@/data/types/Pixels";

const totalPixels = (pixels : Pixel[]) => pixels.length;

export const convolutionData = (pixels : Pixel[]) => {
    return (pixels.reduce((acc, pixel) => acc + (pixel.r >= 200 ? 1 : 0), 0)*100/totalPixels(pixels));
}

export const imageSegmentationData = (pixels : Pixel[]) => {
    return (pixels.reduce((acc, pixel) => acc + (pixel.b >= 200 ? 1 : 0), 0)*100/totalPixels(pixels));
}

export const spectralData = (pixels : Pixel[]) => {
    return (pixels.reduce((acc, pixel) => acc + (pixel.g >= 200 ? 1 : 0), 0)*100/totalPixels(pixels));
}