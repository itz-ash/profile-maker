import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers-creator";
import { InitialStateTypes } from "../types/initialStateTypes";
import { badgesInitial } from "./initialStates/badgesInitialState";
import { nameInitial } from "./initialStates/nameInitialStates";
import { connectionsInitial } from "./initialStates/connectionsInitialState";

const initialState: InitialStateTypes = {
  banner: null,
  avatar: null,
  userState: "online",
  status: "status",
  badges: badgesInitial,
  name: nameInitial,
  aboutMe: "about me",
  connections: connectionsInitial
}

export const store = createStore(reducers, initialState, applyMiddleware(thunk))