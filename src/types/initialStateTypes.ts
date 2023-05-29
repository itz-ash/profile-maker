import { userStateNameTypes } from "./userStatesTypes";
export interface InitialStateTypes {
  banner?: string;
  avatar?: string;
  userState?: userStateNameTypes;
  badges?: {
    name: string;
    visible: boolean;
  }[];
  status?: string;
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