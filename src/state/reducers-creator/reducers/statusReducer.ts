const statusReducer = (state = "", action: any): any => {
  if (action.type === "changeStatus") {
    return {
      status: action.status,
    }
  } else {
    return state;
  }
};

export default statusReducer;
