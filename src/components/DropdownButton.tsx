import React, { ReactNode, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const DropdownButton = () => {
  const [open, setopen] = useState(false);
  const caretClass = open ? "caretSVG rotate-90" : "caretSVG rotate0";
  return (
    <>
      <a
        onClick={() => {
          setopen(!open);
        }}
        className="dropdownButton"
      >
        <p className="dropdownText">Add icons</p>
        <img className={caretClass} src="./public/icons/caret.svg"></img>
      </a>
      {open && (
        <div>
          <DropdownMenu />
        </div>
      )}
    </>
  );
};
export default DropdownButton;
