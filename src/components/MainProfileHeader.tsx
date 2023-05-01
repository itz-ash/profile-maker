import React from "react";

const MainProfileHeader = () => {
  return (
    <>
      <div className="banner"></div>
      <div className="avatar">
        <img
          className="avatarPhoto"
          alt=" "
          aria-hidden="true"
          src="/public/avatar.png"
        />
        <div className="status">
          <img alt=" " aria-hidden="true" src="/public/status/online.png" />
        </div>
      </div>
    </>
  );
};

export default MainProfileHeader;
