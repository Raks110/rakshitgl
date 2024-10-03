import { ThemeContext } from "../../../common/theme/ThemeContext";
import { useContext } from "react";
import './Project.css'

function Project({config, content}) {

    const { darkTheme } = useContext(ThemeContext);
    return (
        <div style={{color: darkTheme ? 'white' : 'black', backgroundColor: config.backgroundColor, width: '47%', height: '100%', display: 'inline-flex', justifyContent: 'space-between', flexDirection: 'column', margin: '1.5%', padding: 16, borderRadius: 12, textAlign: 'left'}}>
            <div className="header">
                <div className="year" style={{color: config.accentColor}}>
                    {content.year}
                </div>
                <div className="title">
                    {content.title}
                </div>
            </div>
            <div className="footer">
                <div className="description">
                    {content.description}
                </div>
                <a href={content.link} className="sourceLink" style={{backgroundColor: config.parentBackground, color: config.accentColor}}>source <span class="material-symbols-rounded" style={{fontSize: 'x-small', marginTop: 'auto', fontWeight: 'bold'}}>open_in_new</span></a>
            </div>
        </div>
    )
}

export default Project;