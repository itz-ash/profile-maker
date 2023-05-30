// import { InitialStateTypes } from "../../../types/initialStateTypes";

const userStateReducer = (state = "online", action: any): any => {
  if (action.type === "changeUserState") {
    return action.userState
  } else {
    return state;
  }
};

export default userStateReducer;
