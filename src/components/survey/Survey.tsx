import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import MeasureConstants from "@/data/constants/MeasureConstants";
import { useAppDispatch } from "@/redux/hooks";
import { updateUserMeasure } from "@/redux/slices/historySlice";

export default function Survey() {
  const [userMeasure, setUserMeasure] = useState(MeasureConstants.DEFAULT_MEASURE);

  const dispatch = useAppDispatch();

  const handleSave = () => {
    dispatch(updateUserMeasure(-1, userMeasure));
  }

  return (
    <>
      <h3 className="text-center">Your Measure</h3>
      <h1 className="text-gray-600">{userMeasure}</h1>
      <Slider
        defaultValue={[userMeasure]}
        onValueChange={(e) => setUserMeasure(e[0])}
        min={MeasureConstants.MIN_MEASURE}
        max={MeasureConstants.MAX_MEASURE}
        step={MeasureConstants.STEP_MEASURE}
      />
      <Button className="w-full" variant="outline" onClick={handleSave}>
        Save
      </Button>
    </>
  );
}
