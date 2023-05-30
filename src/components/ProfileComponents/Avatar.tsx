import { useSelector } from "react-redux/es/exports"
// import { useDispatch } from "react-redux/es/hooks/useDispatch"
// import { bindActionCreators } from "redux"
// import actionCreators from "../../state/action-creators/index"
import { InitialStateTypes } from "../../types/initialStateTypes"

const Avatar = () => {
  const avatar = useSelector((state: InitialStateTypes) => state.avatar)

  if (!avatar) {
    return null // Return null or any placeholder when no avatar is selected
  }

  return (
    <>
      <img className="avatar" src={URL.createObjectURL(avatar)} alt="Avatar" />
    </>
  )
}

export default Avatar
