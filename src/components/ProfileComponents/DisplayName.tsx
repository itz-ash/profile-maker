import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const DisplayName = (props: Props) => {
  const displayName = useSelector(
    (state: InitialStateTypes) => state.name?.displayName
  )

  return <div className={props.className}>{displayName}</div>
}

export default DisplayName
