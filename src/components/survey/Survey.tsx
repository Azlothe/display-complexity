import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import MeasureConstants from "@/data/constants/MeasureConstants";

export default function Survey() {
  const [userMeasure, setUserMeasure] = useState(50);
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
      <Button className="w-full" variant="outline">
        Save
      </Button>
    </>
  );
}
