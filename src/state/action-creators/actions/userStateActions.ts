// import { userStateNameTypes } from "../../../types/userStatesTypes"
export const changeUserState = (userState = "online") => {
  return (dispatch: any) => {
    dispatch({
      type: "changeUserState",
      userState: userState
    });
  };
};