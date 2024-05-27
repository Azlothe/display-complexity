import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import MeasureConstants from "@/data/constants/MeasureConstants";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  updateCurrentIndex,
  updateUserMeasure,
} from "@/redux/slices/canvasSlice";
import { getAuto } from "@/redux/slices/settingsSlice";

export default function Survey() {
  const [userMeasure, setUserMeasure] = useState(
    MeasureConstants.DEFAULT_MEASURE
  );

  const dispatch = useAppDispatch();
  const auto = useAppSelector(getAuto);

  const handleSave = () => {
    dispatch(updateUserMeasure(-1, userMeasure));
    if (auto) dispatch(updateCurrentIndex(1));
  };

  return (
    <>
      <h3 className="text-center">Your Measure</h3>
      <h1 className="text-gray-600">{userMeasure}</h1>
      <div className="flex flex-row space-x-2 items-center justify-center w-52">
        <span>{MeasureConstants.MIN_MEASURE}</span>

        <Slider
          defaultValue={[userMeasure]}
          onValueChange={(e) => setUserMeasure(e[0])}
          min={MeasureConstants.MIN_MEASURE}
          max={MeasureConstants.MAX_MEASURE}
          step={MeasureConstants.STEP_MEASURE}
        />
        <span>{MeasureConstants.MAX_MEASURE}</span>
      </div>
      <Button className="w-full" variant="outline" onClick={handleSave}>
        Save
      </Button>
    </>
  );
}
