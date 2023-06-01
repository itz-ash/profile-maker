import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const Status = (props: Props) => {
  const status = useSelector((state: InitialStateTypes) => state.status)

  return <div className={props.className}>{status}</div>
}

export default Status
