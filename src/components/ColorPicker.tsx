import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ handleOutsideClick }: any) => {
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleChange = (updatedColor: any) => {
    setColor(updatedColor.hex);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (showColorPicker && !event.target.closest(".colorPickerButton")) {
        setShowColorPicker(false);
        handleOutsideClick(); // Call the callback passed as prop
      }
    };

    document.addEventListener("click", handleClickOutside);

    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setShowColorPicker(false);
        handleOutsideClick(); // Call the callback passed as prop
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showColorPicker, handleOutsideClick]);

  return (
    <div>
      <button
        className="colorPickerButton"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></button>

      {showColorPicker && (
        <ChromePicker color={color} onChange={handleChange} />
      )}
    </div>
  );
};

export default ColorPicker;
