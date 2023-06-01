import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const Badges = (props: Props) => {
  const badges = useSelector((state: InitialStateTypes) => state.badges)
  console.log(badges)

  if (!badges) {
    return <>Loading...</>
  }

  const visibleNames = badges
    .filter((obj: any) => obj.visible === true)
    .map((obj: any) => obj.name)

  return (
    <>
      {visibleNames.map((name: string, index: number) => (
        <img
          className={props.className}
          src={`/badages/${name}.svg`}
          key={index}
        />
      ))}
    </>
  )
}

export default Badges
