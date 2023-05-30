const statusReducer = (state = "", action: any): any => {
  if (action.type === "changeStatus") {
    return action.status
  } else {
    return state;
  }
};

export default statusReducer;
