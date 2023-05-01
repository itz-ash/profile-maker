import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  customStyle?: React.CSSProperties;
  type?: "primary" | "secondary" | "grey";
}

const Button = (props: Props) => {
  const backgroundColorClass =
    props.type === "primary"
      ? "blue"
      : props.type === "secondary"
      ? "green"
      : "grey";

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button
        className={"formButton " + backgroundColorClass}
        style={{ ...props.customStyle }}
        onClick={togglePopup}
      >
        {props.children}
      </button>
      {showPopup && (
        <div className="popupContainer">
          <div className="popup">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <p>Hello! I'm a pop-up.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
