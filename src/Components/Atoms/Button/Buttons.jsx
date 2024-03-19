import React from "react";

const Buttons = ({ type, onClick, name, disabled, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${
        disabled ? "cursor-not-allowed opacity-30" : " "
      } bg-blue-600 h-[30px] w-[80px] mt-4 mb-4 text-white text-l rounded hover:bg-blue-900 ${className}`}
    >
      {name}
    </button>
  );
};

export default Buttons;
