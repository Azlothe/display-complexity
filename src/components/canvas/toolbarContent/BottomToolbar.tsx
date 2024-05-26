import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getAIToggle,
  getAuto,
  updateAIToggle,
  updateAuto,
} from "@/redux/slices/settingsSlice";

const BottomToolbar = () => {
  const [paused, setPaused] = useState(true);

  const auto = useAppSelector(getAuto);
  const AIToggle = useAppSelector(getAIToggle);

  const dispatch = useAppDispatch();

  return (
    <>
      <b
        className="block -ml-2"
        style={{
          fontFamily: "Montserrat, sans-serif",
          textShadow:
            "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
        }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="ai"
              checked={AIToggle}
              onCheckedChange={(e: boolean) => dispatch(updateAIToggle(e))}
            />
            <Label htmlFor="ai">AI</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="auto"
              checked={auto}
              onCheckedChange={(e: boolean) => dispatch(updateAuto(e))}
            />
            <Label htmlFor="auto">Auto</Label>
          </div>
        </div>
      </b>

      {!auto && (
        <div className="flex flex-row w-fit items-center justify-center gap-10 bg-white text-black border-2 rounded-full px-4 py-2.5">
          <MdSkipPrevious className="cursor-pointer" />
          <GrLinkPrevious className="cursor-pointer" />
          {paused ? (
            <FaPlay
              onClick={() => setPaused(false)}
              className="cursor-pointer"
            />
          ) : (
            <FaStop
              onClick={() => setPaused(true)}
              className="cursor-pointer"
            />
          )}
          <GrLinkNext className="cursor-pointer" />
          <MdSkipNext className="cursor-pointer" />
        </div>
      )}
      <div />
    </>
  );
};

export default BottomToolbar;
