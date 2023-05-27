const nameReducer = (state = "", action: any): any => {
  if (action.type === "changeIcon") {
    return {
      displayName: action.displayName,
      userName: action.userName
    }
  } else {
    return state;
  }
};

export default nameReducer;
