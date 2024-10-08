import Bio from "./bio/Bio";
import Projects from "./projects/Projects";
import Notes from "./notes/Notes";
import { styleParentFloatingItems } from "../common/utils/Utilities";

function DashBoard(props) {
  return (
    <div className="dashboard-items">
      <Bio
        style={styleParentFloatingItems(props.themedColors, props.width)}
        theme={props.themedColors}
        config={{
          logo: require("../static/images/astronaut" +
            (props.themedColors.dark ? "" : "_light") +
            ".gif"),
          logoHeight: 120,
          logoWidth: 120,
        }}
      />
      <Projects
        style={styleParentFloatingItems(props.themedColors, props.width)}
        theme={props.themedColors}
        width={props.width}
      />
      <Notes
        style={styleParentFloatingItems(props.themedColors, props.width)}
        theme={props.themedColors}
        width={props.width}
      />
      <span
        className="final-footer"
        style={{ color: props.themedColors.dark ? "white" : "black" }}
      >
        built with 🩵 in the windy city. more features underway.
      </span>
    </div>
  );
}

export default DashBoard;
