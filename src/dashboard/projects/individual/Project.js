import { linkToTechName } from "../../../common/utils/Utilities";
import "./Project.css";

function Project({ theme, width, content }) {
  return (
    <div
      className="projectBody"
      style={{
        color: theme.dark ? "white" : "black",
        backgroundColor: theme.primaryBackground,
        width: width >= 760 ? "47%" : "95%",
      }}
    >
      <div className="projectHeader">
        <div className="projectTitle">
          <div className="year" style={{ color: theme.darkAccent }}>
            {content.year}
          </div>
          <div className="title">{content.title}</div>
        </div>
        <div className="langLogoCollection">
          {content.logos?.map((item, index) => (
            <span
              key={index}
              tabIndex="0"
              data-toggle="tooltip"
              title={linkToTechName(item)}
            >
              <img
                alt={linkToTechName(item)}
                src={require("../../../static" +
                  (item.includes("opencl") && theme.dark
                    ? item + "_dark.png"
                    : item.includes("png") || item.includes("svg")
                    ? item
                    : item + ".png"))}
                height={16}
                className="langLogo"
              />
            </span>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="description">{content.description}</div>
        <a
          href={content.link}
          className="sourceLink"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: theme.accent,
            color: theme.darkAccent,
            marginRight: 8,
            display: content.link ? "inline-block" : "none",
          }}
        >
          source <span className="material-symbols-rounded">open_in_new</span>
        </a>
        <a
          href={content.pdf}
          className="sourceLink"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: theme.accent,
            color: theme.darkAccent,
            display: content.pdf ? "inline-block" : "none",
          }}
        >
          read more{" "}
          <span className="material-symbols-rounded">open_in_new</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
