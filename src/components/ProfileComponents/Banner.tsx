import { useSelector } from "react-redux/es/exports"
import { InitialStateTypes } from "../../types/initialStateTypes"

interface Props {
  className?: string
}

const Banner = (props: Props) => {
  const banner = useSelector((state: InitialStateTypes) => state.banner)

  if (banner == null) {
    return (
      <>
        <img
          className={props.className}
          src="public/placeholders/banner-placeholder.jpeg"
          alt="Placeholder"
        />
      </>
    )
  }

  return (
    <>
      <img
        className={props.className}
        src={URL.createObjectURL(banner)}
        alt="Avatar"
      />
    </>
  )
}

export default Banner
