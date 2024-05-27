import LineChart from "@/components/charts/LineChart";
import Survey from "@/components/survey/Survey";
import { useAppSelector } from "@/redux/hooks";
import { getHistory } from "@/redux/slices/canvasSlice";

const RLHF = () => {
  const history = useAppSelector(getHistory);

  const data = history
    .map((el, index) => {
      if (el.complexity && el.complexity.user) {
        return {
          userMeasure: el.complexity.user,
          convolutionMeasure: el.complexity.convolution,
          segmentMeasure: el.complexity.segmentation,
          spectralMeasure: el.complexity.spectral,
          index: `Img ${index + 1}`,
        };
      }
    })
    .filter((el) => el !== undefined) as {
    userMeasure: number;
    convolutionMeasure: number;
    segmentMeasure: number;
    spectralMeasure: number;
    index: string;
  }[];

  console.log(history);

  const userData = data.map((el) => el.userMeasure);
  const convolutionData = data.map((el) => el.convolutionMeasure);
  const segmentData = data.map((el) => el.segmentMeasure);
  const spectralData = data.map((el) => el.spectralMeasure);
  const labels = data.map((el) => el.index);

  return (
    <div className="w-full">
      <h3 className="text-center m-6">Human Display Complexity</h3>
      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="bg-slate-200 px-8 py-4 flex flex-col rounded-xl">
          <h2 className="text-center">Display Complexity History</h2>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  label: "User",
                  data: userData,
                  borderColor: "rgb(75, 192, 192)", // green
                  tension: 0.1,
                  fill: false,
                },
                {
                  label: "Convolution",
                  data: convolutionData,
                  borderColor: "rgb(255, 99, 132)", // red
                  tension: 0.1,
                  fill: false,
                },
                {
                  label: "Segmentation",
                  data: segmentData,
                  borderColor: "rgb(54, 162, 235)", // blue
                  tension: 0.1,
                  fill: false,
                },
                {
                  label: "Spectral",
                  data: spectralData,
                  borderColor: "rgb(255, 159, 64)", // yellow
                  tension: 0.1,
                  fill: false,
                }
                
              ],
            }}
            labels={labels}
          />
        </div>
        <div className="bg-slate-200 px-6 py-4 rounded-xl flex flex-col items-center justify-between w-fit gap-6">
          <Survey />
        </div>
      </div>
    </div>
  );
};

export default RLHF;
