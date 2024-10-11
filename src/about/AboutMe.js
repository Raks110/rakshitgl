import { styleParentFloatingItems } from "../common/utils/Utilities";
import "./AboutMe.css";
import Experience from "./individual/Experience";
import aboutData from "../static/data/about.json";

function AboutMe(props) {
  var accentBackground = props.themedColors.primary;
  var primaryBackground = props.themedColors.primaryBackground;

  return (
    //TODO collapse the div on click
    <div className="aboutMeParent">
      <div style={styleParentFloatingItems(props.themedColors, props.width)}>
        <span className="constTitle">about me</span>
        <div className="aboutLinks">
          <a
            className="source"
            href="https://linkedin.com/in/rakshitgl"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: props.themedColors.dark
                ? accentBackground
                : primaryBackground,
              color: !props.themedColors.dark
                ? accentBackground
                : primaryBackground,
            }}
          >
            <span
              className="verticalCenterBio"
              style={{ color: "#006399", marginRight: 2 }}
            >
              linkedin{" "}
            </span>
            <img
              src={require("../static/images/linkedin.png")}
              height={19}
              width={19}
            />
          </a>
          <a
            className="source"
            href="https://github.com/Raks110/"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: props.themedColors.dark
                ? accentBackground
                : primaryBackground,
              color: !props.themedColors.dark
                ? accentBackground
                : primaryBackground,
            }}
          >
            <span className="verticalCenterBio" style={{ color: "#000" }}>
              github{" "}
            </span>
            <img
              src={require("../static/images/github.png")}
              height={20}
              width={20}
              style={{ marginLeft: 2 }}
            />
          </a>
        </div>
        {aboutData.experiences.map((item, index) => (
          <Experience
            key={index}
            themedColors={props.themedColors}
            width={props.width}
            content={item}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
