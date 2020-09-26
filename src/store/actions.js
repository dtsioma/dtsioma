export const changeColorScheme = (bgColor, headerColor, textColor) => {
  return {
    type: 'CHANGE_COLOR_SCHEME',
    bgColor: bgColor,
    headerColor: headerColor,
    textColor: textColor
  }
}