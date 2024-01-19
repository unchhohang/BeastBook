/**Upper NavBar UI */

import * as stylex from "@stylexjs/stylex";
import spearImg from "@BeastBook/assets/images/spear.png";

const styles = stylex.create({
  default: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridAutoRows: "minmax(100px, auto)",
    gap: "30px",
    fontFamily: "OoohBaby",
    fontSize: "36px",
  },
  normalCol: {
    gridColumn: 1 / 8,
  },
  spearCol: {
    gridColumn: 3 / 8,
    marginRight: "50px",
  },
});

const NavBar = () => {
  return (
    <div {...stylex.props(styles.default)}>
      <div {...stylex.props(styles.normalCol)}>Home</div>
      <div {...stylex.props(styles.spearCol)}>
        <img src={spearImg} alt="spear image" />
      </div>
      <div {...stylex.props(styles.normalCol)}>Stories</div>
      <div {...stylex.props(styles.normalCol)}>Status</div>
      <div {...stylex.props(styles.normalCol)}>Collab</div>
    </div>
  );
};

export default NavBar;
