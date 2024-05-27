import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      tension: number;
      fill: false;
    }[];
  };
  labels: string[];
}

const LineChart = ({ data, labels }: LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.data.labels = labels;
          chartInstance.current.data = data;
          chartInstance.current.update();
        } else {
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {...data},
          });
        }
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
