import Bio from "./bio/Bio";
import Projects from "./projects/Projects";
import Notes from "./notes/Notes";

function DashBoard(props) {
  console.log("in dashboard: ", props);

  return (
    <div className="dashboard-items">
      <Bio
        style={styleParentFloatingItems(props.themedColors, props.width)}
        theme={props.themedColors}
        config={{
          logo: require("../static/astronaut" +
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

function styleParentFloatingItems(themedColors, width) {
  console.log("In style: ", themedColors, width);
  return {
    maxWidth:
      width >= 1400
        ? "50%"
        : width >= 1200
        ? "55%"
        : width >= 1000
        ? "65%"
        : width >= 850
        ? "75%"
        : "95%",
    backgroundColor: themedColors.accent,
    margin: "auto",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    color: themedColors.textColor,
  };
}

export default DashBoard;
