export function styleParentFloatingItems(themedColors, width) {
  return {
    maxWidth:
      width >= 1400
        ? "50%"
        : width >= 1200
        ? "55%"
        : width >= 1000
        ? "65%"
        : width >= 850
        ? "75%"
        : "95%",
    backgroundColor: themedColors.accent,
    margin: "auto",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    color: themedColors.textColor,
  };
}

export function linkToTechName(item) {
  if (item.includes("scala")) {
    return "Scala";
  }
  if (item.includes("android")) {
    return "Android Development";
  }
  if (item.includes("app_engine")) {
    return "Google App Engine";
  }
  if (item.includes("cpp")) {
    return "C++";
  }
  if (item.includes("css")) {
    return "CSS";
  }
  if (item.includes("javascript")) {
    return "Javascript";
  }
  if (item.includes("opencl")) {
    return "OpenCL";
  }
  if (item.includes("pytorch")) {
    return "Pytorch";
  }
  if (item.includes("react")) {
    return "React";
  }
}
