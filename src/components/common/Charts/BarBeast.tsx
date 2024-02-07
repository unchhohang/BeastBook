/**
 * Bar chart for beast book
 */

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import COLORS from "@BeastBook/assets/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type props = {
  datas: (number | "")[];
};

const labels = ["", "", "", "", "", ""];

const BarBeast = ({ datas }: props) => {
  console.log("datas", datas);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: datas.map((v, i) => (i === 0 || i === 5 ? "" : v)),
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: [COLORS.air, COLORS.earth, COLORS.fire, COLORS.water],
        barThickness: 60,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2 / 1,

        scales: {
          x: {
            border: {
              width: 2,
              color: "#000000",
            },
            grid: {
              drawOnChartArea: false,
            },
          },
          y: {
            ticks: {
              color: "#000000",
            },
            border: {
              width: 2,
              color: "#000000",
            },
            grid: {
              drawOnChartArea: false,
              tickWidth: 2,
              tickColor: "#000000",
            },
          },
        },

        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default BarBeast;
