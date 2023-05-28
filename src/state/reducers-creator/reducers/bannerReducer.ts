

const bannerReducer = (state = "init banner reducer", action: any) => {

  if (action.type === "changeBanner") {
    return action.payload;
  } else {
    return state
  }

}

export default bannerReducer