import { HexAlphaColorPicker, RgbaColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getBottomBG,
  getCanvasBG,
  getTopBG,
  updateBottomBG,
  updateCanvasBG,
  updateTopBG,
} from "@/redux/slices/settingsSlice";
import { AppDispatch } from "@/redux/store";
import { RGB } from "@/data/types/CanvasTypes";

const BackgroundColor = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const canvasBG: RGB = useAppSelector(getCanvasBG);
  const topBG: string = useAppSelector(getTopBG);
  const bottomBG: string = useAppSelector(getBottomBG);
  return (
    <>
      <h4>Background Color</h4>
      <Popover>
        <PopoverTrigger>
          <span className="flex flex-row gap-4 h-full">
            Canvas:
            <div
              className="w-12 border-gray-400 border-2"
              style={{
                backgroundColor: `rgba(${canvasBG.r},${canvasBG.g},${
                  canvasBG.b
                },${canvasBG.a ?? 1})`,
              }}
            />
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <RgbaColorPicker
            color={{
              r: canvasBG.r,
              g: canvasBG.g,
              b: canvasBG.b,
              a: canvasBG.a ?? 1,
            }}
            onChange={(e: RGB) => dispatch(updateCanvasBG(e))}
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <span className="flex flex-row gap-4 h-full">
            Top
            <div
              className="w-12 border-gray-400 border-2"
              style={{ backgroundColor: topBG }}
            />
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <HexAlphaColorPicker
            color={topBG}
            onChange={(e: string) => dispatch(updateTopBG(e))}
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <span className="flex flex-row gap-4 h-full">
            Bottom:
            <div
              className="w-12 border-gray-400 border-2"
              style={{ backgroundColor: bottomBG }}
            />
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <HexAlphaColorPicker
            color={bottomBG}
            onChange={(e: string) => dispatch(updateBottomBG(e))}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default BackgroundColor;
