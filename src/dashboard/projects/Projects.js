import { Link } from "react-router-dom";
import Project from "./individual/Project";
import "./Projects.css";

function Projects(props) {
  return (
    <div style={props.style}>
      <div className="internalNavbar">
        <span className="verticalCenter">recent projects</span>
        <Link
          to="/projects"
          className="showAll"
          style={{
            color: props.theme.textColor,
            backgroundColor: props.theme.dark ? "#00000033" : "#FFFFFF33",
          }}
        >
          show all
          <span className="material-symbols-rounded showAllIcon">
            expand_content
          </span>
        </Link>
      </div>
      <Project
        theme={props.theme}
        width={props.width}
        content={{
          title: "llem",
          year: "2024",
          description:
            "A LLM wrapper to get an intrinsic understanding of their internal working",
          link: "https://github.com/Raks110/llem",
        }}
      />
      <Project
        theme={props.theme}
        width={props.width}
        content={{
          title: "NumCPP",
          year: "2021",
          description: "A Linear Algebra machine for C++- powered by OpenCL",
          link: "https://github.com/Raks110/NumCPP",
          pdf: "https://drive.google.com/file/d/1iudI7AFJh1yOrKRa0n7TyUTQ9Evzh6jK/view?usp=sharing",
        }}
      />
    </div>
  );
}

export default Projects;
