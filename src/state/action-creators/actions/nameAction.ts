export const changeName = (displayName: string, UserName: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeName",
      displayName: displayName,
      UserName: UserName
    });
  };
};