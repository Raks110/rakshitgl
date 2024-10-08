import { Link } from "react-router-dom";
import { styleParentFloatingItems } from "../common/utils/Utilities";
import Project from "../dashboard/projects/individual/Project";
import projectData from "../static/data/projects.json";
import "./AllProjects.css";

function AllProjects(props) {
  return (
    <div className="allProjectsParent">
      <div style={styleParentFloatingItems(props.themedColors, props.width)}>
        <div className="internalNavbar">
          <span className="verticalCenter allProjectsTitle">all projects</span>
          <Link
            className="showAllIcon"
            to="/home"
            style={{ color: props.themedColors.dark ? "#FFF" : "#000" }}
          >
            <span className="material-symbols-rounded">cancel</span>
          </Link>
        </div>
        {projectData.projects.map((item, index) => (
          <Project
            key={index}
            theme={props.themedColors}
            width={props.width}
            content={item}
          />
        ))}
        <div className="allProjectsFooter">
          this list will keep going! more projects on the way.
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
