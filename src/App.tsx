import { useState } from "react";
import "./styles/style.css";
import MainProfileMain from "./components/MainProfileMain";
import MainProfileHeader from "./components/MainProfileHeader";
import MainForm from "./components/MainForm";
function App() {
  return (
    <>
      <div className="container">
        <div className="formContainer">
          <MainForm />
        </div>
        <div className="profileContainer">
          <MainProfileHeader />
          <MainProfileMain />
        </div>
      </div>
    </>
  );
}

export default App;
