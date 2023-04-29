import React, { ReactNode } from "react";

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

  return (
    <button
      className={"formButton " + backgroundColorClass}
      style={{ ...props.customStyle }}
    >
      {props.children}
    </button>
  );
};

export default Button;
