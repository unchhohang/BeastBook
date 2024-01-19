/**
 * Next button Component
 */

import * as stylex from "@stylexjs/stylex";
import  {ReactComponent as HandRightLogo} from "@BeastBook/assets/icon/hand-right.svg";

const styles = stylex.create({
  btn: {
    backgroundColor: "#B4FB5B",
    padding: "20px",
    width: "250px",
    height: "70px",
    borderRadius: "40px",
    // borderTopLeftRadius: '25%'
  },
  text: {
    fontSize: "48px",
    fontFamily: "OoohBaby",
  },
  btnDiv: {
    display: "flex",
    alighItems: "top",
  },
});

const NextButton = () => {
  return (
    <button {...stylex.props(styles.btn)}>
      <div {...stylex.props(styles.btnDiv)}>
        <text {...stylex.props(styles.text)}>Next</text>
        <HandRightLogo />
      </div>
    </button>
  );
};

export default NextButton;
