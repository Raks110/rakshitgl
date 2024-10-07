function Affiliation({ imageConfig, logo, style }) {
  return (
    <span tabIndex="0" data-toggle="tooltip" title={imageConfig.tooltip}>
      <img
        style={style}
        alt={imageConfig.alt}
        className="affiliate_logo"
        src={logo.darkTheme ? logo.darkLogo : logo.lightLogo}
        width={imageConfig.width}
        height={imageConfig.height}
      />
    </span>
  );
}

export default Affiliation;
