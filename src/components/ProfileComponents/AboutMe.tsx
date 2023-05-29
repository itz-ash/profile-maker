import { useSelector } from "react-redux/es/exports"
// import { useDispatch } from "react-redux/es/hooks/useDispatch"
// import { bindActionCreators } from "redux"
// import actionCreators from "../../state/action-creators/index"
import { InitialStateTypes } from "../../types/initialStateTypes"

const AboutMe = () => {
  const aboutMe = useSelector((state: InitialStateTypes) => state.aboutMe)

  return <>{aboutMe}</>
}

export default AboutMe
