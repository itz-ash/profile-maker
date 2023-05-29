import { combineReducers } from "redux"

import bannerReducer from "./reducers/bannerReducer"
import avatarReducer from "./reducers/avatarReducer"
import userStateReducer from "./reducers/userStateReducer"
import badgesReducer from "./reducers/badgesReducer"
import nameReducer from "./reducers/nameReducer"
import aboutMeReducer from "./reducers/aboutMeReducer"
import connectionsReducer from "./reducers/connectionsReducer"
import statusReducer from "./reducers/statusReducer"

const reducers = combineReducers({
  banner: bannerReducer,
  avatar: avatarReducer,
  userState: userStateReducer,
  badges: badgesReducer,
  name: nameReducer,
  aboutMe: aboutMeReducer,
  connections: connectionsReducer,
  status: statusReducer
})

export default reducers