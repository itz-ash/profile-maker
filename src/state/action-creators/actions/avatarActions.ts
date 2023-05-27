export const changeAvatar = (args: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeAvatar",
      payload: args
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