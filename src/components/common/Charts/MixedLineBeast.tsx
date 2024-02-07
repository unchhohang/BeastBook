/**
 * Mixed line beast
 */

import COLORS from "@BeastBook/assets/colors";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type props = {
  // age: number[];
  manaConsumption: number[];
};

const labels = ["1", "10", "20", "30"];

const MixedLineBeast = ({ manaConsumption }: props) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Mana Consumption",

        data: manaConsumption,
        borderColor: COLORS.manaConsumption,
        backgroundColor: COLORS.manaConsumption,
        yAxisID: "y",
      },
      // {
      //   label: "",
      //   data: age,
      //   borderColor: COLORS.age,
      //   backgroundColor: COLORS.age,
      //   yAxisID: "y1",
      // },
    ],
  };
  return (
    <Line
      options={{
        interaction: {
          mode: "index" as const,
          intersect: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2 / 1,

        plugins: {
          legend: {
            labels: {
              color: "#000000",
              font: {
                size: 20,
                weight: "normal",
                style: "italic",
              },
            },
          },
        },
        scales: {
          y: {
            type: "linear" as const,
            display: true,
            position: "left" as const,
            grid: {
              drawOnChartArea: false,
              tickWidth: 2,
              tickColor: "#000000",
            },
            ticks: {
              color: "#000000",
            },
            border: {
              width: 2,
              color: "#000000",
            },
          },
          x: {
            display: true,
            border: {
              width: 2,
              color: "#000000",
            },
            grid: {
              drawOnChartArea: false,
              tickWidth: 2,
              tickColor: "#000000",
            },
            ticks: {
              color: "#000000",
            },
          },
          y1: {
            type: "linear" as const,
            display: false,
            grid: {
              drawOnChartArea: false,
            },
          },
          x1: {
            display: false,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
      data={data}
    />
  );
};

export default MixedLineBeast;
