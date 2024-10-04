import { ThemeContext } from "../../../common/theme/ThemeContext";
import { useContext } from "react";
import './Note.css'

function Note({config, content}) {

    const { darkTheme } = useContext(ThemeContext);
    return (
        <div style={{color: darkTheme ? 'white' : 'black', backgroundColor: config.backgroundColor, width: '47%', height: '100%', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column', margin: '1.5%', padding: 16, borderRadius: 12, textAlign: 'left'}}>
            <div className="header">
                <div className="frequency" style={{color: config.accentColor}}>
                    {content.frequency}
                    <span class="material-symbols-rounded" style={{fontSize: 'xx-small', margin: '2px'}}>
                        repeat
                    </span>
                </div>
                <div className="title">
                    {content.title}
                </div>
            </div>
            <div className="footer">
                <div className="description">
                    {content.description}
                </div>
            </div>
        </div>
    )
}

export default Note;