import { useSelector } from "react-redux/es/exports"
// import { useDispatch } from "react-redux/es/hooks/useDispatch"
// import { bindActionCreators } from "redux"
// import actionCreators from "../../state/action-creators/index"
import { InitialStateTypes } from "../../types/initialStateTypes"

const Connection = () => {
  const connections = useSelector(
    (state: InitialStateTypes) => state.connections
  )

  // TODO add displayonnectionName property in the store object
  if (!connections) {
    return <div>Loading...</div> // or any other loading state
  }

  const visibleNames = connections
    .filter((obj: any) => obj.visible === true)
    .map((obj: any) => obj.name)

  return (
    <div>
      {visibleNames.map((name: string, index: number) => (
        <>
          <img src={`/connections/${name}.svg`} key={index} />
          <span> {name.replaceAll("-", " ")} </span>
        </>
      ))}
    </div>
  )
}

export default Connection
