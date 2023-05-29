import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

const DisplayName = () => {
  const displayName = useSelector(
    (state: InitialStateTypes) => state.name?.displayName
  )

  return <>{displayName}</>
}

export default DisplayName
