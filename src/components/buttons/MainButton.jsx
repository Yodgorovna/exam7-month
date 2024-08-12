import React from "react";

export const MainButton = ({ onClick, children }) => {
  return (
    <div>
      <button
        className=" bg-primary hover:bg-hoverColor py-4 px-4 rounded flex items-center justify-center"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
