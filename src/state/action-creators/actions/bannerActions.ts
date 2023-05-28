export const changeBanner = (bannerLink: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeBanner",
      banner: bannerLink
    });
  };
};