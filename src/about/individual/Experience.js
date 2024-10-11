import "./Experience.css";

function Experience({ themedColors, content, width }) {
  return (
    <div
      className="aboutCore"
      style={{
        backgroundColor: themedColors.primaryBackground,
      }}
    >
      <div className="aboutYear" style={{ color: themedColors.textColor }}>
        {content.year}
      </div>
      <span
        className="constSubTitle"
        style={{ color: themedColors.darkAccent }}
      >
        {content.title}
      </span>
      <div className="aboutLogo">
        <img
          className="aboutLogoImg"
          src={require("../../static/images/" + content.logo)}
        />
      </div>
      <div
        className="aboutDesc"
        style={{
          color: themedColors.textColor,
        }}
      >
        {content.desc}
      </div>
      {content.highlight?.map((item, index) => (
        <div
          key={index}
          className="aboutHigh"
          style={{
            color: themedColors.darkAccent,
          }}
        >
          <span
            className="material-symbols-rounded highlightIcon"
            style={{ display: width < 500 ? "none" : "block" }}
          >
            award_star
          </span>
          <span className="highDesc">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default Experience;
