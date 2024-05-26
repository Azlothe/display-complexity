import LineChart from "@/components/charts/LineChart";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const MIN_MEASURE = 0;
const MAX_MEASURE = 100;
const STEP_MEASURE = 1;

const RLHF = () => {
  const data = [50, 78, 20, 15, 96, 35];
  const labels = ["1", "2", "3", "4", "5", "6"];

  const [userMeasure, setUserMeasure] = useState(50);

  return (
    <div className="w-full">
      <h3 className="text-center m-6">Human Display Complexity</h3>
      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="bg-slate-200 px-8 py-4 flex flex-col rounded-xl">
          <h2 className="text-center">Display Complexity History</h2>
          <LineChart data={data} labels={labels} />
        </div>
        <div className="bg-slate-200 px-8 py-6 rounded-xl flex flex-col items-center justify-between w-fit gap-6">
          <h3 className="text-center">Your Measure</h3>
          <h1 className="text-gray-600">{userMeasure}</h1>
          <Slider
            defaultValue={[userMeasure]}
            onValueChange={(e) => setUserMeasure(e[0])}
            min={MIN_MEASURE}
            max={MAX_MEASURE}
            step={STEP_MEASURE}
          />
          <Button className="w-full" variant="outline">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RLHF;
