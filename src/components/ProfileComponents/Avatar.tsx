import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const Avatar = (props: Props) => {
  const avatar = useSelector((state: InitialStateTypes) => state.avatar)

  if (!avatar) {
    return (
      <>
        <img
          className={props.className}
          src="public/placeholders/avatar-placeholder.jpeg"
          alt="Placeholder"
        />
      </>
    )
  }

  return (
    <>
      <img
        className={props.className}
        src={URL.createObjectURL(avatar)}
        alt="Avatar"
      />
    </>
  )
}

export default Avatar
