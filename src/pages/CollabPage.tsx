/**
 * Collab page
 */

import LayoutContainer from "@BeastBook/layout/LayoutContainer";
import MagicManImg from "@BeastBook/assets/images/MagicMan.png";
import ReactIconImg from "@BeastBook/assets/images/react-logo.png";
import NodeJsIconImg from "@BeastBook/assets/images/nodejs-icon.png";
import TsIconImg from "@BeastBook/assets/images/typescript.png";
import MongodbIconImg from "@BeastBook/assets/images/mongodb-icon.png";
import SqlIconImg from "@BeastBook/assets/images/sql-icon.png";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    display: "flex",
    justifyContent: "end",
  },
  poem: {
    fontSize: 30,
    lineHeight: 1.5,
  },
  imgGroup: {
    display:'flex',
    flexWrap: "wrap",
  },
  img: {
    // objectFit: "cover",
    // objectPosition: "top",
    margin: "25px",
  },
});

const CollabPage = () => {
  return (
    <LayoutContainer>
      <div {...stylex.props(styles.base)}>
        <div {...stylex.props(styles.poem)}>
          <div>
            Some short stories I craft <br />
            From home country <br />
            of high Nepal
            <br />
            Full Stack developer my role
            <br />
            contact me
            <br />
            on my mail
            <br />
            just to collab
            <br />
            Or to play
            <br />
          </div>
          <div>unchhohang@gamil.com</div>
        </div>
        <div {...stylex.props(styles.imgGroup)}>
          {/* <img
            src={MagicManImg}
            alt="Magic man image"
            {...stylex.props(styles.img)}
          /> */}
          <img
            src={ReactIconImg}
            alt="icons powers"
            height={"auto"}
            width={"20%"}
            {...stylex.props(styles.img)}
          />
          <img
            src={NodeJsIconImg}
            alt="icons powers"
            height={"auto"}
            width={"20%"}
            {...stylex.props(styles.img)}
          />
          <img
            src={TsIconImg}
            alt="icons powers"
            height={"auto"}
            width={"20%"}
            {...stylex.props(styles.img)}
          />
          <img
            src={MongodbIconImg}
            alt="icons powers"
            height={"auto"}
            width={"20%"}
            {...stylex.props(styles.img)}
          />
          <img
            src={SqlIconImg}
            alt="icons powers"
            height={"auto"}
            width={"20%"}
            {...stylex.props(styles.img)}
          />
        </div>
      </div>
    </LayoutContainer>
  );
};

export default CollabPage;
