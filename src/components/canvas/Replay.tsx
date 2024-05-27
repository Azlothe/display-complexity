import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  setCurrentIndex,
  updateCurrentIndex,
} from "@/redux/slices/canvasSlice";

const Replay = () => {
  const [paused, setPaused] = useState(true);

  const dispatch = useAppDispatch();

  const getNextState = () => {
    dispatch(updateCurrentIndex(1));
  };

  const getPrevState = () => {
    dispatch(updateCurrentIndex(-1));
  };

  const gotoStart = () => {
    dispatch(setCurrentIndex(0));
  };

  const gotoEnd = () => {
    dispatch(setCurrentIndex(-1));
  };

  useEffect(() => {
    if (!paused) {
      const autoplay = setInterval(getNextState, 5000);
      return () => clearInterval(autoplay);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  return (
    <>
      <MdSkipPrevious className="cursor-pointer" onClick={gotoStart} />
      <GrLinkPrevious className="cursor-pointer" onClick={getPrevState} />
      {paused ? (
        <FaPlay onClick={() => setPaused(false)} className="cursor-pointer" />
      ) : (
        <FaStop onClick={() => setPaused(true)} className="cursor-pointer" />
      )}
      <GrLinkNext className="cursor-pointer" onClick={getNextState} />
      <MdSkipNext className="cursor-pointer" onClick={gotoEnd} />
    </>
  );
};

export default Replay;
