import { useSelector } from "react-redux/es/exports"
// import { useDispatch } from "react-redux/es/hooks/useDispatch"
// import { bindActionCreators } from "redux"
// import actionCreators from "../../state/action-creators/index"
import { InitialStateTypes } from "../../types/initialStateTypes"

const Banner = () => {
  const banner = useSelector((state: InitialStateTypes) => state.banner)

  if (!banner) {
    return null // Return null or any placeholder when no avatar is selected
  }

  return (
    <>
      <img className="banner" src={URL.createObjectURL(banner)} alt="Avatar" />
    </>
  )
}

export default Banner
