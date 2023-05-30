import { userStateNameTypes } from "../../../types/userStatesTypes";

// import { userStateNameTypes } from "../../../types/userStatesTypes"
export const changeUserState = (userState: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeUserState",
      userState: userState
    });
  };
};