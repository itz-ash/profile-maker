export const changeStatus = (status: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeStatus",
      status: status
    });
  };
};