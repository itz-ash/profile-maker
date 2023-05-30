import { useDispatch } from "react-redux"
import Dropzone from "../UtilityComponents/Dropzone"
import { changeBanner } from "../../state/action-creators/actions/bannerActions"

const ChangeBanner = () => {
  const dispatch = useDispatch()

  const handleFileUpload = (files: any) => {
    // Assuming only a single file is selected
    const file = files[0]
    // Perform any necessary file handling or processing here

    // Dispatch the updateAvatar action with the file
    dispatch(changeBanner(file))
  }

  return (
    <div>
      <Dropzone onFileUpload={handleFileUpload} />
    </div>
  )
}

export default ChangeBanner
