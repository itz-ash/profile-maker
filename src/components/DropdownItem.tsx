import React, { ReactNode } from "react";

interface Props {
  logo?: any;
  children: ReactNode;
}

const DropdownItem = (props: Props) => {
  return (
    <div className="dropdownItemContainer">
      <span className="dropdownItemSVG">
        {React.cloneElement(props.logo, {
          style: { height: "24px", width: "24px" },
        })}
      </span>
      <span className="dropdownItemText">{props.children}</span>
      <img className="tickSVG" src="../../public/icons/tick.svg"></img>
    </div>
  );
};

export default DropdownItem;
