import { iconsName, visibleTypes } from "../../../types/iconsTypes";

export const changeIcons = (name: iconsName, visible: visibleTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeIcon",
      name: name,
      visible: visible
    });
  };
};