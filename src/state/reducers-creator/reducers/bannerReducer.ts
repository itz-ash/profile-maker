

const bannerReducer = (state = "init banner reducer", action:any) => {

  if(action.type === "changeBanner"){
    return action.payload;
  } else if(action.type === "removeBanner"){
    return " "
  } else {
    return state
  }

}

export default bannerReducer