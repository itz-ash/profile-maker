import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const UserState = (props: Props) => {
  const userState = useSelector((state: InitialStateTypes) => state.userState)

  return <img className={props.className} src={`status/${userState}.svg`}></img>
}

export default UserState
