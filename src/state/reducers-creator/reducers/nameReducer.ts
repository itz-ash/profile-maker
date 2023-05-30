import { nameInitial } from "../../initialStates/nameInitialStates";

const nameReducer = (state = nameInitial, action: any): any => {
  if (action.type === "changeDisplayName") {
    return {
      ...state,
      displayName: action.displayName,
    }
  } else if (action.type === "changeUserName") {
    return {
      ...state,
      userName: action.userName,
    }
  }
  return state;
};

export default nameReducer;
