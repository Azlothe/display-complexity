import { Button } from "@/components/ui/button";
import { Pixel } from "@/data/types/Pixels";
import { useAppSelector } from "@/redux/hooks";
import { getImage } from "@/redux/slices/pixelSlice";
import { convolutionData, imageSegmentationData, spectralData } from "@/scripts/DataAnalyzer";
import { condensePixelArray } from "@/scripts/PixelMapper";
import { Image } from "p5";
import { useEffect, useMemo, useState } from "react";

const StaticAlgorithms = () => {
  const image = useAppSelector(getImage) as Image;

  const pixelArr: Pixel[] = useMemo(() => image && image.pixels ? condensePixelArray(image.pixels) : [], [image]);

  console.log(pixelArr)

  const [convolutionCalc, setConvolutionCalc] = useState(-1);
  const [imageSegmentCalc, setImageSegmentCalc] = useState(-1);
  const [spectralCalc, setSpectralCalc] = useState(-1);

  useEffect(() => {
    setConvolutionCalc(convolutionData(pixelArr));
    setImageSegmentCalc(imageSegmentationData(pixelArr));
    setSpectralCalc(spectralData(pixelArr));
  }, [pixelArr]);

  return (
    <div className="w-full">
      <h3 className="text-center m-6">Display Complexity Calculations</h3>
      <div className="flex flex-row gap-16 items-center justify-center">
        <div className="flex flex-col gap-6 bg-slate-200 py-6 px-4 rounded-xl">
          <h1 className="text-center text-gray-600">{`${(
            convolutionCalc * 100
          ).toPrecision(2)}%`}</h1>
          <Button variant="ghost" className="underline text-blue-600">
            Convolution
          </Button>
        </div>
        <div className="flex flex-col gap-6 bg-slate-200 py-6 px-4 rounded-xl">
          <h1 className="text-center text-gray-600">{`${(
            imageSegmentCalc * 100
          ).toPrecision(2)}%`}</h1>
          <Button variant="ghost" className="underline text-blue-600">
            Image Segmentation
          </Button>
        </div>
        <div className="flex flex-col gap-6 bg-slate-200 py-6 px-4 rounded-xl">
          <h1 className="text-center text-gray-600">{`${(
            spectralCalc * 100
          ).toPrecision(2)}%`}</h1>
          <Button variant="ghost" className="underline text-blue-600">
            Spectral Analysis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StaticAlgorithms;
