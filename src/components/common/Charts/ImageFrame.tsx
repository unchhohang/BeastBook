/**
 * Image frame for Beast
 */

import BImg from "@BeastBook/assets/images/bear.png";

import * as stylex from "@stylexjs/stylex";
import { LeftArrow, RightArrow } from "@BeastBook/assets/icon/index.icons";

type props = {
  imagePath: string;
  onLeftClick: () => void;
  onRightClick: () => void;
};

const styles = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    alignItems: "center",
    position: "relative",
    bottom: "98px",
  },
  img: {
    objectFit: "cover",
    maxHeight: "100%",
  },
});

const ImageFrame = ({ imagePath, onLeftClick, onRightClick }: props) => {
  return (
    <div {...stylex.props(styles.base)}>
      <LeftArrow onClick={() => onLeftClick()} />
      <img src={imagePath} {...stylex.props(styles.img)} />
      <RightArrow onClick={() => onRightClick()} />
    </div>
  );
};

export default ImageFrame;
