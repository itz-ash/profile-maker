import { Route, Routes } from "react-router-dom"
import "../src/styles/style.css"
import ProfilePage from "./pages/ProfilePage"
import PreviewPage from "./pages/PreviewPage"

//TODO - add router

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </>
  )
}

export default App
