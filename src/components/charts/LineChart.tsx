import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  data: number[];
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
          chartInstance.current.data.datasets[0].data = data;
          chartInstance.current.update();

        } else {
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "User",
                  data: data,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                  fill: false,
                },
                {
                  label: "Convolution",
                  data: data.map(el => 100-el),
                  borderColor: "rgb(255, 192, 192)",
                  tension: 0.1,
                  fill: false,
                },
              ],
            },
          },
        );
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
