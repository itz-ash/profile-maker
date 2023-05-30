export const changeBanner = (banner: string): any => {
  return (dispatch: any) => {
    dispatch({
      type: "changeBanner",
      banner: banner
    });
  };
};