import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const UserName = (props: Props) => {
  const userName = useSelector(
    (state: InitialStateTypes) => state.name?.userName
  )

  return <div className={props.className}>{userName}</div>
}

export default UserName
