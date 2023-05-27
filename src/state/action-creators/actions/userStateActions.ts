import { nameTypes, visibleTypes } from "../../../types/userStatesTypes"
// type NameTypes = "online" | "dnd" | "offline" | "idle" | "mobile" | "streaming"
// type visibleTypes = true | false

export const changeUserState = (name:nameTypes,visible:visibleTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeUserState",
      name: name,
      visible: visible
    });
  };
};