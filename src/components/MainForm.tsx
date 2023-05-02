import Button from "./Button";
import ColorPicker from "./ColorPicker";
import React from "react";
import Divider from "./Divider";
import { useState } from "react";
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
        <p className="dropdownText">Add Connections</p>
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

const MainForm = () => {
  return (
    <div className="formCard">
      <div className="profileThemeContainer">
        <div className="smallHeaderText grey-text">profile theme</div>
        <div className="colorPickerContainer">
          <div className="primaryPickerButton">
            <ColorPicker />
            <div className="colorPickerText">Primary</div>
          </div>
          <div className="accentPickerButton">
            <ColorPicker />
            <div className="colorPickerText">Accent</div>
          </div>
        </div>
        <Divider />
        <div className="profileBannerContainer">
          <div className="smallHeaderText grey-text">profile banner</div>
          <div className="profileBannerButton">
            <Button type="primary">Change Banner</Button>
          </div>
        </div>
        <Divider />
        <div className="profileAvatarContainer">
          <div className="smallHeaderText grey-text">animated avatar</div>
          <div className="profileAvatarButton">
            <Button type="primary">Change Avatar</Button>
          </div>
        </div>
        <Divider />
        <div className="changeStatusContainer">
          <div className="smallHeaderText grey-text">Change Status</div>
          <div className="changeStatusButton">
            <Button type="primary">Change Status</Button>
          </div>
        </div>
        <Divider />
        <div className="addConnectionsContainer">
          <div className="smallHeaderText grey-text">add connections</div>
          <DropdownButton />
        </div>
      </div>
    </div>
  );
};

export default MainForm;
