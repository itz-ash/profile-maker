export const changeAvatar = (avatarLink: string) => {
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