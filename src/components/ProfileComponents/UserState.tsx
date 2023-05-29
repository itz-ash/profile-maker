import { useSelector } from "react-redux/es/exports"
// import { useDispatch } from "react-redux/es/hooks/useDispatch"
// import { bindActionCreators } from "redux"
// import actionCreators from "../../state/action-creators/index"
import { InitialStateTypes } from "../../types/initialStateTypes"

// TODO - show icon only

const UserState = () => {
  const userState = useSelector((state: InitialStateTypes) => state.userState)

  return <img src={`status/${userState}.svg`}></img>
}

export default UserState
