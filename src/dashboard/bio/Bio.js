import "./Bio.css";
import Affiliation from "./affiliations/Affiliation";

function Bio(props) {
  var isDarkTheme = props.theme.dark;
  var accentBackground = props.theme.primary;
  var primaryBackground = props.theme.primaryBackground;
  var textColor = props.theme.textColor;

  return (
    <>
      <div style={props.style}>
        <img
          alt="a fun little astronaut floating in the space"
          className="bioGif"
          src={props.config.logo}
          height={props.config.logoHeight}
          width={props.config.logoWidth}
        />
        <div className="bioContent">
          <span
            style={{
              color: textColor,
            }}
          >
            <b>Hi! I am Rakshit.</b>
          </span>
          <br />
          <span>
            I am a graduate student at the University of Chicago, and I am super
            stoked about deploying my skills into projects that require a deep
            understanding of software engineering, cloud computing, and machine
            learning!
          </span>
        </div>
        <div className="affiliations">
          <div
            className="logos"
            style={{
              backgroundColor: isDarkTheme
                ? accentBackground
                : primaryBackground,
            }}
          >
            <Affiliation
              imageConfig={{
                height: 26,
                width: 22,
                tooltip:
                  "[2024-2025*] M.S. in Computer Science degree from the University of Chicago",
              }}
              logo={{
                darkTheme: isDarkTheme,
                darkLogo: require("../../static/images/uchicago.png"),
                lightLogo: require("../../static/images/uchicago.png"),
              }}
            />
            <Affiliation
              style={{ marginLeft: isDarkTheme ? 10 : 13 }}
              imageConfig={{
                height: 22,
                width: 20,
                tooltip:
                  "[2021-2024] Associate Software Engineer at Deutsche Bank.",
              }}
              logo={{
                darkTheme: isDarkTheme,
                darkLogo: require("../../static/images/deutsche_bank_dark.png"),
                lightLogo: require("../../static/images/deutsche_bank.png"),
              }}
            />
            <Affiliation
              imageConfig={{
                height: isDarkTheme ? 26 : 30,
                width: isDarkTheme ? 22 : 28,
                tooltip:
                  "[2017-2021] B. Tech degree from Manipal Academy of Higher Education",
              }}
              logo={{
                darkTheme: isDarkTheme,
                darkLogo: require("../../static/images/manipal_dark.png"),
                lightLogo: require("../../static/images/manipal.png"),
              }}
            />
          </div>
          <a
            className="source"
            href="https://github.com/Raks110/rakshitgl"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: isDarkTheme
                ? accentBackground
                : primaryBackground,
              color: !isDarkTheme ? accentBackground : primaryBackground,
            }}
          >
            <span className="verticalCenterBio">
              check out the source code{" "}
            </span>
            <span className="material-symbols-rounded verticalCenter sourceIcon">
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Bio;
