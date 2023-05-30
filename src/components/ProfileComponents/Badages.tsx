import { useSelector } from "react-redux/es/exports"
// import { useDispatch } from "react-redux/es/hooks/useDispatch"
// import { bindActionCreators } from "redux"
// import actionCreators from "../../state/action-creators/index"
import { InitialStateTypes } from "../../types/initialStateTypes"

const Badges = () => {
  const badges = useSelector((state: InitialStateTypes) => state.badges)
  console.log(badges)

  if (!badges) {
    return <div>Loading...</div>
  }

  const visibleNames = badges
    .filter((obj: any) => obj.visible === true)
    .map((obj: any) => obj.name)

  return (
    <>
      {visibleNames.map((name: string, index: number) => (
        <img className="badge" src={`/badages/${name}.svg`} key={index} />
      ))}
    </>
  )
}

export default Badges
