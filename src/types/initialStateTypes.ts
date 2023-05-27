export interface InitialStateTypes {
  banner?: string;
  avatar?: string;
  userState?: {
    name: string;
    src: string;
    visible: boolean;
  }[];
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
    src: string;
    visible: boolean;
  }[];
}