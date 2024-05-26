import LineChart from "@/components/charts/LineChart";
import Survey from "@/components/survey/Survey";

const RLHF = () => {
  const data = [50, 78, 20, 15, 96, 35];
  const labels = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="w-full">
      <h3 className="text-center m-6">Human Display Complexity</h3>
      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="bg-slate-200 px-8 py-4 flex flex-col rounded-xl">
          <h2 className="text-center">Display Complexity History</h2>
          <LineChart data={data} labels={labels} />
        </div>
        <div className="bg-slate-200 px-8 py-6 rounded-xl flex flex-col items-center justify-between w-fit gap-6">
          <Survey />
        </div>
      </div>
    </div>
  );
};

export default RLHF;
