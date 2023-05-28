import * as bannerActions from "./actions/bannerActions";
import * as avatarActions from "./actions/avatarActions";
import * as userStateActions from "./actions/userStateActions";
import * as iconsAction from "./actions/iconsActions"
import * as nameAction from "./actions/nameAction"
import * as aboutMeAction from "./actions/aboutMeActions"
import * as connectionsAction from "./actions/connectionsAction"

export default {
  ...bannerActions,
  ...avatarActions,
  ...userStateActions,
  ...iconsAction,
  ...nameAction,
  ...aboutMeAction,
  ...connectionsAction
};
