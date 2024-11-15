import { spawn } from "child_process";
import { CSSProperties } from "react";
type Headertextprops = {
  menuTitle: string;
};

const Headertext = (props: Headertextprops) => {
  const css: CSSProperties = {
    color: "white",
    padding: "5px 40px",
    textAlign: "center",
    margin: "0 auto",
  };
  return (
    <div style={css}>
      <span>{props.menuTitle}</span>
    </div>
  );
};

export default Headertext;
