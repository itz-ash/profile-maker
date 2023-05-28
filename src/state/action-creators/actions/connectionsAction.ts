// import { iconsName, visibleTypes } from "../../../types/iconsTypes";

import { connectionsTypes, visibleTypes, linkTypes } from "../../../types/connectionsTypes"
export const changeConnection = (name: connectionsTypes, visible: visibleTypes, link: linkTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeConnection",
      name: name,
      link: link,
      visible: visible
    });
  };
};