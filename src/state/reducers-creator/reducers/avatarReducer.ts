const avatarReducer = (state = null, action: any) => {
  if (action.type === "changeAvatar") {
    return action.payload;
  } else if (action.type === "removeAvatar") {
    return "";
  } else {
    return state;
  }
};

export default avatarReducer;
