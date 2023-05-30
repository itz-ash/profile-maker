const aboutMeReducer = (state = "", action: any): any => {
  if (action.type === "changeAboutMe") {
    return action.aboutMe;
  } else {
    return state;
  }
};

export default aboutMeReducer;
