import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { useState } from "react";

const BottomToolbar = () => {
  const [paused, setPaused] = useState(true);

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
        <div className="flex items-center space-x-2">
          <Switch id="ai" />
          <Label htmlFor="ai">AI</Label>
        </div>
      </b>

      <div className="flex flex-row w-fit items-center justify-center gap-10 bg-white text-black border-2 rounded-full px-4 py-2.5">
        <MdSkipPrevious className="cursor-pointer" />
        <GrLinkPrevious className="cursor-pointer" />
        {paused ? (
          <FaPlay onClick={() => setPaused(false)} className="cursor-pointer" />
        ) : (
          <FaStop onClick={() => setPaused(true)} className="cursor-pointer" />
        )}
        <GrLinkNext className="cursor-pointer" />
        <MdSkipNext className="cursor-pointer" />
      </div>
      <div />
    </>
  );
};

export default BottomToolbar;
