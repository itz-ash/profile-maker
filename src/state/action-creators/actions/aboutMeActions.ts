export const changeAboutMe = (aboutMe: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeAboutMe",
      payload: aboutMe
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