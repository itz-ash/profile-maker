const aboutMeReducer = (state = "", action: any): any => {
  if (action.type === "changeaboutMe") {
    return {
      aboutMe: action.aboutMe,
    }
  } else {
    return state;
  }
};

export default aboutMeReducer;
