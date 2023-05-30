

const bannerReducer = (state = null, action: any) => {

  if (action.type === "changeBanner") {
    return action.banner;
  } else {
    return state
  }

}

export default bannerReducer