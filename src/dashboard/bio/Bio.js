import { useContext } from 'react';
import { ThemeContext } from '../../common/theme/ThemeContext';
import colors from '../../common/colors';
import './Bio.css'

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
                maxWidth: '35%',
                backgroundColor: accentBackground,
                margin: 8,
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
                    Hi! I am Rakshit. I am a graduate student at the University of Chicago, and I am super stoked about deploying my skills into projects that require a deep understanding of software engineering, cloud computing, and machine learning!
                </div>
                <div className='logos' style={{
                    backgroundColor: primaryBackground,
                    display: 'inline-block',
                    padding: 8,
                    borderRadius: 12
                }}>
                    <img className='affiliate_logo' src={require('../../static/uchicago.png')} width={22} height={26}/>
                    <img className='affiliate_logo' src={require('../../static/deutsche_bank' + (darkTheme ? '_dark' : '') + '.png')} width={20} height={22}/>
                    <img className='affiliate_logo' style={{marginLeft: 4}} src={require('../../static/manipal' + (darkTheme ? '_dark' : '') + '.png')} width={darkTheme ? 22 : 28} height={darkTheme ? 26 : 30}/>
                </div>
            </div>
        </>
    )
}

export default Bio;