import { styleParentFloatingItems } from "../common/utils/Utilities";
import "./AllNotes.css";

function AllNotes(props) {
  return (
    <div className="allNotesParent">
      <div style={styleParentFloatingItems(props.themedColors, props.width)}>
        <span className="notesTitle">Curtains Drawn.</span>
        <span className="notesDesc">
          This page will be back up again in a few days!
        </span>
      </div>
    </div>
  );
}

export default AllNotes;
