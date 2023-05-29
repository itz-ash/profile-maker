import badgesName from "../../../types/badgesTypes";
export const changeIcons = (name: badgesName, visible: true | false) => {
  return (dispatch: any) => {
    dispatch({
      type: "changeIcon",
      name: name,
      visible: visible
    });
  };
};