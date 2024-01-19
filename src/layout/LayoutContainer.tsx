// Layout container for containg all the pages. To match background color and Images
import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import paperBackground from "../assets/images/paper.png";
import NavBar from "../components/common/NavBar/index.NavBar";

const styles = stylex.create({
  paper: (path) => ({
    // background: `no-repeat url(${path})`,
    // background: `red`,
    // fontFamily: 'poppins',
    // backgroundSize: "contain",
    // backgroundRepeat: "no-repeat",
    padding: "30px 100px 100px",
  }),
  child: {
    marginTop: "21px",
  },
});

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div {...stylex.props(styles.paper(paperBackground))}>
      <div>
        <NavBar />
      </div>
      <div {...stylex.props(styles.child)}>{children}</div>
    </div>
  );
};

export default LayoutContainer;
