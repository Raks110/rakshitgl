import { useContext } from "react";
import Project from "./individual/Project";
import { ThemeContext } from "../../common/theme/ThemeContext";
import colors from "../../common/colors";
import './Projects.css'

function Projects({showAll}) {

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
                <span style={{marginTop: 'auto', marginBottom: 'auto'}}>recent projects</span>
                <a href="#" className="showAll" style={{color: textColor}}>show all <span class="material-symbols-rounded" style={{fontSize: 'x-small', marginTop: 'auto', fontWeight: 'bold'}}>expand_content</span></a>
            </div>
            <Project config={{backgroundColor: primaryBackground, accentColor: accentText, parentBackground: accentBackground}}
                     content={{title: 'llem', year: '2024', description: "A LLM wrapper to get an intrinsic understanding of their internal working", link: "https://github.com/Raks110/llem"}}
            />
            <Project config={{backgroundColor: primaryBackground, accentColor: accentText, parentBackground: accentBackground}}
                     content={{title: 'NumCPP', year: '2021', description: "A Linear Algebra machine for C++- powered by OpenCL", link: "https://github.com/Raks110/NumCPP"}}
            />
        </div>
    )
}

export default Projects;