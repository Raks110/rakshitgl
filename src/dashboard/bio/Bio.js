import { useContext } from 'react';
import { ThemeContext } from '../../common/theme/ThemeContext';
import colors from '../../common/colors';
import './Bio.css'
import Affiliation from './affiliations/Affiliation';

function Bio() {
    const { darkTheme } = useContext(ThemeContext);
    var accentBackground = colors.light.accent;
    var primaryBackground = colors.light.primary_background;
    var textColor = colors.light.text_color;
    if(darkTheme) {
        accentBackground = colors.dark.accent;
        primaryBackground = colors.dark.primary_background;
        textColor = colors.dark.text_color;
    }

    return (
        <>
            <div style={{
                maxWidth: '50%',
                backgroundColor: accentBackground,
                margin: 'auto',
                borderRadius: 12,
                padding: 16,
                color: textColor
            }}>
                <img src={require('../../static/astronaut' + (darkTheme ? '' : '_light') + '.gif')} height={120} width={120} style={{
                    borderRadius: "50%",
                    objectFit: 'cover'
                }}/>
                <div style={{
                    lineHeight: 1.8,
                    marginTop: 16,
                    padding: 8
                }}>
                    <span style={{
                        color: darkTheme ? colors.dark.text_color : colors.light.text_color
                    }}><b>Hi! I am Rakshit.</b></span><br/>I am a graduate student at the University of Chicago, and I am super stoked about deploying my skills into projects that require a deep understanding of software engineering, cloud computing, and machine learning!
                </div>
                <div className='logos' style={{
                    backgroundColor: primaryBackground,
                    display: 'inline-block',
                    padding: 8,
                    borderRadius: 12
                }}>
                    <Affiliation imageConfig={{height: 26, width: 22, tooltip: '[2024-2025*] M.S. in Computer Science degree from the University of Chicago'}}
                                 logo={{darkTheme: darkTheme, darkLogo: require('../../static/uchicago.png'), lightLogo: require('../../static/uchicago.png')}}
                    />
                    <Affiliation style={{marginLeft: darkTheme ? 10 : 13}} imageConfig={{height: 22, width: 20, tooltip: '[2021-2024] Associate Software Engineer at Deutsche Bank.'}}
                                 logo={{darkTheme: darkTheme, darkLogo: require('../../static/deutsche_bank_dark.png'), lightLogo: require('../../static/deutsche_bank.png')}}
                    />
                    <Affiliation imageConfig={{height: darkTheme ? 26 : 30, width: darkTheme ? 22 : 28, tooltip: '[2017-2021] B. Tech degree from Manipal Academy of Higher Education'}}
                                 logo={{darkTheme: darkTheme, darkLogo: require('../../static/manipal_dark.png'), lightLogo: require('../../static/manipal.png')}}
                    />
                </div>
            </div>
        </>
    )
}

export default Bio;