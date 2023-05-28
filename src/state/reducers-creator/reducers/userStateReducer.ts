// import { InitialStateTypes } from "../../../types/initialStateTypes";

const userStateReducer = (state = "online", action: any): any => {
  if (action.type === "changeUserState") {
    return {
      name: action.name,
    }
  } else {
    return state;
  }
};

export default userStateReducer;
