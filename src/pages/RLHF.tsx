import LineChart from "@/components/charts/LineChart";
import Survey from "@/components/survey/Survey";
import { useAppSelector } from "@/redux/hooks";
import { getHistory } from "@/redux/slices/historySlice";

const RLHF = () => {
  const history = useAppSelector(getHistory);

  const data = history
    .map((el, index) => {
      if (el.complexity && el.complexity.user) {
        return { userMeasure: el.complexity.user, index: `Img ${index + 1}` };
      }
    })
    .filter((el) => el !== undefined) as {
    userMeasure: number;
    index: string;
  }[];

  const userData = data.map((el) => el.userMeasure);
  const labels = data.map((el) => el.index);

  return (
    <div className="w-full">
      <h3 className="text-center m-6">Human Display Complexity</h3>
      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="bg-slate-200 px-8 py-4 flex flex-col rounded-xl">
          <h2 className="text-center">Display Complexity History</h2>
          <LineChart data={userData} labels={labels} />
        </div>
        <div className="bg-slate-200 px-8 py-6 rounded-xl flex flex-col items-center justify-between w-fit gap-6">
          <Survey />
        </div>
      </div>
    </div>
  );
};

export default RLHF;
