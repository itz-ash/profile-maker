const userStateReducer = (state = "a", action:any):any => {
  if (action.type === "changeUserState") {
    return {
      name: action.name,
      visible: action.visible
    }
  } else {
    return state;
  }
};

export default userStateReducer;
