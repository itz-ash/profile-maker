const connectionsReducer = (state = "", action: any): any => {
  if (action.type === "changeConnections") {
    return {
      name: action.name,
      link: action.link,
      visible: action.visible

    }
  } else {
    return state;
  }
};

export default connectionsReducer;
