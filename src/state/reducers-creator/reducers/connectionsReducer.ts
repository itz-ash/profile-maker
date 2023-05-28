import { connectionsInitial } from "../../initialStates/connectionsInitialState";

const connectionsReducer = (state = connectionsInitial, action: any) => {
  switch (action.type) {
    case "changeConnection":
      return state.map(connection => {
        if (connection.name === action.name) {
          return {
            ...connection,
            visible: action.visible,
            link: action.link
          };
        }
        return connection;
      });
    default:
      return state;
  }
};

export default connectionsReducer;


