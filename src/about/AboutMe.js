import { styleParentFloatingItems } from "../common/utils/Utilities";
import "./AboutMe.css";

function AboutMe(props) {
  return (
    <div className="aboutMeParent">
      <div style={styleParentFloatingItems(props.themedColors, props.width)}>
        <span className="constTitle">Curtains Drawn.</span>
        <span className="constDesc">
          This page will be back up again in a few days!
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
