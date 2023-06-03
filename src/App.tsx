import { Route, Routes } from "react-router-dom"
import "../src/styles/style.css"
import ProfilePage from "./pages/ProfilePage"
import SettingsPage from "./pages/SettingsPage"

//TODO - add router

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  )
}

export default App
