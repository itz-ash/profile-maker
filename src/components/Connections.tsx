import React from "react";

const Connections = () => {
  return (
    <div className="connectionCard">
      <img
        className="connectionImage"
        alt=" "
        aria-hidden="true"
        src="/public/platforms/github.svg"
      />
      <div className="connectionName">ash</div>
      <a
        href="https://github.com/Domin-MND"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img
          className="linkSVG"
          alt=" "
          aria-hidden="true"
          src="/public/icons/link.svg"
        />
      </a>
    </div>
  );
};

export default Connections;
