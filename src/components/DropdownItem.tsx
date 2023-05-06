import React, { ReactNode, useState } from "react";

interface Props {
  logo?: any;
  children?: ReactNode;
}

const DropdownItem = (props: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="dropdownItemContainer"
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <span className="dropdownItemSVG">
        {React.cloneElement(props.logo, {
          style: { height: "24px", width: "24px" },
        })}
      </span>
      <span className="dropdownItemText">{props.children}</span>
      {selected && (
        <img
          className="tickSVG dropdownItemTick"
          src="../../public/icons/tick.svg"
        ></img>
      )}
    </div>
  );
};

export default DropdownItem;
