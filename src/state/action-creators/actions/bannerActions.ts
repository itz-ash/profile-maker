export const changeBanner = (args: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeBanner",
      payload: args
    });


  };
};

export const removeBanner = () => {
  return (dispatch: any) => {
    dispatch({
      type: "removeBanner",
    });


  };
};
