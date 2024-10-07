import "./Project.css";

function Project({ theme, content }) {
  return (
    <div
      className="projectBody"
      style={{
        color: theme.dark ? "white" : "black",
        backgroundColor: theme.primaryBackground,
      }}
    >
      <div className="header">
        <div className="year" style={{ color: theme.darkAccent }}>
          {content.year}
        </div>
        <div className="title">{content.title}</div>
      </div>
      <div className="footer">
        <div className="description">{content.description}</div>
        <a
          href={content.link}
          className="sourceLink"
          style={{
            backgroundColor: theme.accent,
            color: theme.darkAccent,
          }}
        >
          source <span className="material-symbols-rounded">open_in_new</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
