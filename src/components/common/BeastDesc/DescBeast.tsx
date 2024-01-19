/**
 * Desc Beast left
 */

import * as stylex from "@stylexjs/stylex";

type props = {
  desc: string;
  imagePath: string;
  index: number; // What order to place
};

const styles = stylex.create({
  base: {
    display: "grid",
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  write: {
    fontSize: "36px",
    marginTop: "77px",
    lineHeight: '54px',
    letterSpacing: '1.44px'
  },
  image: {
    objectFit: "none",
    width: "720px",
    marginBottom: "10px",
  },
  bearFit: {
    marginRigth: "10px",
  },
});

const DescBeast = ({ desc, imagePath, index }: props) => {
  const mod = index % 2;
  console.log("mod", mod);

  if (!!mod) {
    return (
      <div {...stylex.props(styles.base)}>
        <img
          src={imagePath}
          alt={`Beast image: ${imagePath}`}
          {...stylex.props(styles.image)}
        />
        <span {...stylex.props(styles.write)}>{desc}</span>
      </div>
    );
  }
  return (
    <div {...stylex.props(styles.base)}>
      <span {...stylex.props(styles.write)}>{desc}</span>
      <img
        src={imagePath}
        alt={`Beast image: ${imagePath}`}
        {...stylex.props(styles.image)}
      />
    </div>
  );
};

export default DescBeast;
