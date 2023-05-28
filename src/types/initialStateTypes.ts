import { userStateNameTypes } from "./userStatesTypes";

export interface InitialStateTypes {
  banner?: string;
  avatar?: string;
  userState?: userStateNameTypes;
  icon?: {
    name: string;
    src: string;
    visible: boolean;
  }[];
  name?: {
    displayName: string,
    userName: string
  }
  aboutMe?: string;
  connections?: {
    name: string;
    link: string
    visible: boolean;
  }[];
}