export const changeAboutMe = (aboutMe: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeAboutMe",
      aboutMe: aboutMe
    });
  };
};

export const removeAboutMe = () => {
  return (dispatch: any) => {
    dispatch({
      type: "removeAboutMe",
    });
  };
};