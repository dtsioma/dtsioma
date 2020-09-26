const initialState = {
  appBackgroundColor: 'ghostblue',
  headerBackgroundColor: 'transparent',
  appTextColor: 'black',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR_SCHEME':
      return { 
        ...state, 
        appBackgroundColor: action.bgColor, 
        headerBackgroundColor: action.headerColor,
        appTextColor: action.textColor 
      }
    default: 
      return state;
  }
}

export default reducer;