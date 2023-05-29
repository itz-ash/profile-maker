import * as bannerActions from "./actions/bannerActions";
import * as avatarActions from "./actions/avatarActions";
import * as userStateActions from "./actions/userStateActions";
import * as badgesAction from "./actions/badgesActions"
import * as nameAction from "./actions/nameAction"
import * as aboutMeAction from "./actions/aboutMeActions"
import * as connectionsAction from "./actions/connectionsAction"
import * as statusAction from "./actions/statusAction"

export default {
  ...bannerActions,
  ...avatarActions,
  ...userStateActions,
  ...badgesAction,
  ...nameAction,
  ...aboutMeAction,
  ...connectionsAction,
  ...statusAction
};
