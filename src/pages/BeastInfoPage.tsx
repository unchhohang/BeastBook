/**
 * Charts page for Beasts
 */

import NextButton from "@BeastBook/components/common/Buttons/NextButton";
import BarBeast from "@BeastBook/components/common/Charts/BarBeast";
import DoughnutBeast from "@BeastBook/components/common/Charts/DognutBeast";
import ImageFrame from "@BeastBook/components/common/Charts/ImageFrame";
import MixedLineBeast from "@BeastBook/components/common/Charts/MixedLineBeast";
import * as stylex from "@stylexjs/stylex";
import BearImg from "@BeastBook/assets/images/bear.png";
import LilithImg from "@BeastBook/assets/images/lilith.png";
import PatherImg from "@BeastBook/assets/images/panther.png";
import { useState } from "react";
import LayoutContainer from "@BeastBook/layout/LayoutContainer";
import { useNavigate } from "react-router-dom";

const styles = stylex.create({
  base: {},
  grid: {
    marginTop: "25px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "60px",
    rowGap: "100px",
  },
  itemA: {},
  itemB: {},
  itemC: {
    height: "500px",
  },
  itemD: {
    height: "500px",
  },
  foot: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
    gap: 25,
  },
  element: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  elementColor: (color) => ({
    backgroundColor: color,
    padding: "20px",
    border: "none",
  }),
  btnDiv: {
    display: "flex",
    justifyContent: "end",
  },
  btn: {
    position: "relative",
    bottom: "70px",
  },
});

const BeastInfoPage = () => {
  const [n, setN] = useState(0);
  const navigate = useNavigate();


  // functions to handle right and left arrow
  // to change beast details

  const onClickRArrow = () => {
    if (n === 2) {
      setN(0);
      return;
    }
    setN(n + 1);
  };

  const onClickLArrow = () => {
    if (n === 0) {
      setN(2);
      return;
    }
    setN(n - 1);
  };

  return (
    <LayoutContainer>
      <div {...stylex.props(styles.grid)}>
        <div {...stylex.props(styles.itemA)}>
          <DoughnutBeast datas={bios[n].dognutData} />
        </div>
        <div>
          <ImageFrame
            imagePath={bios[n].beastImg}
            onLeftClick={onClickLArrow}
            onRightClick={onClickRArrow}
          />
        </div>
        <div {...stylex.props(styles.itemC)}>
          <BarBeast datas={bios[n].barData} />
        </div>
        <div>
          <MixedLineBeast
            manaConsumption={bios[n].mixedData.manaConsume}
          />
        </div>
      </div>
      <div {...stylex.props(styles.foot)}>
        <span {...stylex.props(styles.element)}>
          <span {...stylex.props(styles.elementColor("#EAB64F"))}></span>
          <span>Fire</span>
        </span>
        <span {...stylex.props(styles.element)}>
          <span {...stylex.props(styles.elementColor("#83688A"))}></span>
          <span>Water</span>
        </span>
        <span {...stylex.props(styles.element)}>
          <span {...stylex.props(styles.elementColor("#B66C36"))}></span>
          <span>Earth</span>
        </span>
        <span {...stylex.props(styles.element)}>
          <span {...stylex.props(styles.elementColor("#C0C1B4"))}></span>
          <span>Air</span>
        </span>
      </div>
      <div {...stylex.props(styles.btnDiv)}>
        <span {...stylex.props(styles.btn)}>
          <NextButton action={() => navigate('/collab')} />
        </span>
      </div>
    </LayoutContainer>
  );
};

type TBios = {
  beastImg: string;
  dognutData: number[];
  barData: (number | "")[];
  mixedData: {
    manaConsume: number[];
  };
};

const bios: TBios[] = [
  {
    beastImg: BearImg,
    dognutData: [20, 40, 30, 10],
    barData: ["", 12, 15, 18, 2, ""],
    mixedData: {
      manaConsume: [200, 300, 400, 500],
    },
  },
  {
    beastImg: PatherImg,
    dognutData: [30, 20, 30, 50],
    barData: ["", 14, 20, 13, 10, ""],
    mixedData: {
      manaConsume: [100, 300, 500, 600],
    },
  },
  {
    beastImg: LilithImg,
    dognutData: [20, 20, 30, 40],
    barData: ["", 20, 150, 10, 20, ""],
    mixedData: {
      manaConsume: [10, 250, 400, 550],
    },
  },
];

export default BeastInfoPage;
