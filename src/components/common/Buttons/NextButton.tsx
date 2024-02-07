/**
 * Next button Component
 */

import { HandRightLogo } from "@BeastBook/assets/icon/index.icons";
import * as stylex from "@stylexjs/stylex";

type props = {
  action: () => void;
};

const styles = stylex.create({
  btn: {
    backgroundColor: "#B4FB5B",
    padding: "20px",
    width: "250px",
    height: "90px",
    borderRadius: "40px",
    // borderTopLeftRadius: '25%'
  },
  text: {
    fontSize: "38px",
    fontFamily: "OoohBaby",
  },
  btnDiv: {
    display: "flex",
    alighItems: "flexStart",
    gap: "40px",
    paddingBottom: "10px",
    justifyContent: "center",
  },
  logo: {
    position: "relative",
    bottom: "14px",
  },
});

const NextButton = ({ action }: props) => {
  return (
    <button {...stylex.props(styles.btn)} onClick={() => action()}>
      <div {...stylex.props(styles.btnDiv)}>
        <text {...stylex.props(styles.text)}>Next</text>
        <div {...stylex.props(styles.logo)}>
          <HandRightLogo />
        </div>
      </div>
    </button>
  );
};

export default NextButton;
