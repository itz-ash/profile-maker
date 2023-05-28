const iconReducer = (state = "", action: any): any => {
  if (action.type === "changeIcon") {
    return {
      name: action.name,
      visible: action.visible
    }
  } else {
    return state;
  }
};

export default iconReducer;
