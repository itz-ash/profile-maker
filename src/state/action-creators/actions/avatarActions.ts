export const changeAvatar = (avatarLink: any): any => {
  return (dispatch: any) => {
    dispatch({
      type: "changeAvatar",
      payload: avatarLink
    });
  };
};


export const removeAvatar = () => {
  return (dispatch: any) => {
    dispatch({
      type: "removeAvatar",
    });
  };
};