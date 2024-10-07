import "./Note.css";

function Note({ content, theme }) {
  return (
    <div
      className="noteBody"
      style={{
        color: theme.dark ? "white" : "black",
        backgroundColor: theme.primaryBackground,
      }}
    >
      <div className="header">
        <div className="frequency" style={{ color: theme.darkAccent }}>
          {content.frequency}
          <span className="material-symbols-rounded">repeat</span>
        </div>
        <div className="title">{content.title}</div>
      </div>
      <div className="footer">
        <div className="description">{content.description}</div>
      </div>
    </div>
  );
}

export default Note;
