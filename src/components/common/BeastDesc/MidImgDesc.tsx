/**
 * Image in mid and describe
 */

import * as stylex from "@stylexjs/stylex";

type props = {
  imagePath: string;
  descPart1: string;
  descPart2: string;
};

const styles = stylex.create({
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    marginTop: "60px",
  },
  write: {
    fontSize: "36px",
    marginTop: "77px",
    lineHeight: "54px",
    letterSpacing: "1.44px",
  },
});

const MidImgDesc = ({ imagePath, descPart1, descPart2 }: props) => {
  return (
    <div {...stylex.props(styles.base)}>
      <text {...stylex.props(styles.write)}>{descPart1}</text>
      <img src={imagePath} alt={imagePath} />
      <text {...stylex.props(styles.write)}>{descPart2}</text>
    </div>
  );
};

export default MidImgDesc;
