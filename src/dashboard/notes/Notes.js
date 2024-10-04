import { useContext } from "react";
import Note from "./individual/Note";
import { ThemeContext } from "../../common/theme/ThemeContext";
import colors from "../../common/colors";
import './Notes.css'

function Notes({showAll}) {

    const { darkTheme } = useContext(ThemeContext);
    var accentBackground = colors.light.accent;
    var primaryBackground = colors.light.primary_background;
    var textColor = colors.light.text_color;
    var accentText = colors.light.dark_accent;
    if(darkTheme) {
        accentBackground = colors.dark.accent;
        primaryBackground = colors.dark.primary_background;
        textColor = colors.dark.text_color;
        accentText = colors.dark.dark_accent;
    }

    return (
        <div style={{
            maxWidth: '50%',
            backgroundColor: accentBackground,
            margin: 'auto',
            marginTop: 8,
            borderRadius: 12,
            padding: 16,
            color: textColor,
            alignItems: 'stretch'
        }}>
            <div class="internalNavbar" style={{display: 'flex', justifyContent: 'space-between', marginLeft: '2.5%', marginRight: '2.5%'}}>
                <span style={{marginTop: 'auto', marginBottom: 'auto'}}>notes and blogs</span>
                <a href="#" className="showAll" style={{color: textColor, backgroundColor: darkTheme ? '#00000033' : '#FFFFFF33'}}>show all <span class="material-symbols-rounded" style={{fontSize: 'x-small', marginTop: 'auto', fontWeight: 'bold'}}>expand_content</span></a>
            </div>
            <Note config={{backgroundColor: primaryBackground, accentColor: accentText, parentBackground: accentBackground}}
                     content={{title: 'leetcode a day', frequency: 'every week', description: "Review hand-picked problems from leetcode. New problems every week!", link: "https://github.com/Raks110/llem"}}
            />
            <Note config={{backgroundColor: primaryBackground, accentColor: accentText, parentBackground: accentBackground}}
                     content={{title: 'into the technaverse', frequency: 'every month', description: "Wake up, choose a topic, top-up on caffeine, and write! Delivered once a month.", link: "https://github.com/Raks110/NumCPP"}}
            />
        </div>
    )
}

export default Notes;