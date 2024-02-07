/**
 * Dognut chart for Beast book
 */

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import COLORS from "@BeastBook/assets/colors";

type props = {
  datas: number[];
};

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutBeast = ({ datas }: props) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: datas,
        backgroundColor: [COLORS.air, COLORS.earth, COLORS.fire, COLORS.water],
        borderColor: [COLORS.air, COLORS.earth, COLORS.fire, COLORS.water],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        // width: "500px",
        // height: "500px",
      }}
    />
  );
};

export default DoughnutBeast;
