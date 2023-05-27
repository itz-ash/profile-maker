const avatarReducer = (state = "a", action:any) => {
  if (action.type === "changeAvatar") {
    return action.payload;
  } else if (action.type === "removeAvatar") {
    return "";
  } else {
    return state;
  }
};

export default avatarReducer;
