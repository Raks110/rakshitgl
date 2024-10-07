import Project from "./individual/Project";
import "./Projects.css";

function Projects(props) {
  return (
    <div style={props.style}>
      <div className="internalNavbar">
        <span className="verticalCenter">recent projects</span>
        <a
          href="#"
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
        </a>
      </div>
      <Project
        theme={props.theme}
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
        content={{
          title: "NumCPP",
          year: "2021",
          description: "A Linear Algebra machine for C++- powered by OpenCL",
          link: "https://github.com/Raks110/NumCPP",
        }}
      />
    </div>
  );
}

export default Projects;
