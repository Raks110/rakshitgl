import Note from "./individual/Note";
import "./Notes.css";

function Notes(props) {
  return (
    <div style={props.style}>
      <div className="internalNavbar">
        <span className="verticalCenter">notes and blogs</span>
        <a
          href="/notes"
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
      <Note
        theme={props.theme}
        content={{
          title: "leetcode a day",
          frequency: "every week",
          description:
            "Review hand-picked problems from leetcode. New problems every week!",
          link: "https://github.com/Raks110/llem",
        }}
      />
      <Note
        theme={props.theme}
        content={{
          title: "into the technaverse",
          frequency: "every month",
          description:
            "Wake up, choose a topic, top-up on caffeine, and write! Delivered once a month.",
          link: "https://github.com/Raks110/NumCPP",
        }}
      />
    </div>
  );
}

export default Notes;
