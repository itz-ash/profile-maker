import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
  type?: "name" | "icon"
}

const Connection = (props: Props) => {
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
          <div className={props.className}>
            <img src={`/connections/${name}.svg`} key={index} />
            <span>{name.replaceAll("-", " ")} </span>
          </div>
        </>
      ))}
    </div>
  )
}

export default Connection
