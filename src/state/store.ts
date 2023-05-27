import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers-creator";
import { userStateInitial } from "./initialStates/userStateInitialState";
import { InitialStateTypes } from "../types/initialStateTypes";
import { iconsInitial } from "./initialStates/iconsInitialState";
import { nameInitial } from "./initialStates/nameInitialStates";
import { connectionsInitial } from "./initialStates/connectionsInitialState";

const initialState: InitialStateTypes = {
  banner: "init banner",
  avatar: "init",
  userState: userStateInitial,
  icon: iconsInitial,
  name: nameInitial,
  aboutMe: "",
  connections: connectionsInitial
}

export const store = createStore(reducers, initialState, applyMiddleware(thunk))