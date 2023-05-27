import { combineReducers } from "redux"

import bannerReducer from "./reducers/bannerReducer"
import avatarReducer from "./reducers/avatarReducer"
import userStateReducer from "./reducers/userStateReducer"
import iconReducer from "./reducers/iconsReducer"
import nameReducer from "./reducers/nameReducer"
import aboutMeReducer from "./reducers/aboutMeReducer"
import connectionsReducer from "./reducers/connectionsReducer"

const reducers = combineReducers({
  banner: bannerReducer,
  avatar: avatarReducer,
  userState: userStateReducer,
  icon: iconReducer,
  name: nameReducer,
  aboutMe: aboutMeReducer,
  connections: connectionsReducer
})

export default reducers