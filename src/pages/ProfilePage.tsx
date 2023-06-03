import { Link } from "react-router-dom"
import ProfileLayout from "../layouts/ProfileLayout"

const ProfilePage = () => {
  return (
    <>
      <ProfileLayout />
      <button>
        <Link to="/settings">Settings</Link>
      </button>
    </>
  )
}

export default ProfilePage
