import Button from "./Button";
import ColorPicker from "./ColorPicker";
import React from "react";
import Divider from "./Divider";

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
      </div>
    </div>
  );
};

export default MainForm;
