import { useDispatch } from "react-redux"
import { changeAvatar } from "../../state/action-creators/actions/avatarActions"
import Dropzone from "../UtilityComponents/Dropzone"

const ChangeAvatar = () => {
  const dispatch = useDispatch()

  const handleFileUpload = (files: any) => {
    // Assuming only a single file is selected
    const file = files[0]
    // Perform any necessary file handling or processing here

    // Dispatch the updateAvatar action with the file
    dispatch(changeAvatar(file))
  }

  return (
    <div>
      <Dropzone onFileUpload={handleFileUpload} />
    </div>
  )
}

export default ChangeAvatar
