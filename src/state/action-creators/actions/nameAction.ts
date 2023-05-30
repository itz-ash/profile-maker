export const changeDisplayName = (displayName: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeDisplayName",
      displayName: displayName,
    });
  };
};

export const changeUserName = (userName: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeUserName",
      userName: userName,
    });
  };
};