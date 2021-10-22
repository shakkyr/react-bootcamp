import React from "react";

const Button = ({ color, func }) => {
  return (
    <div>
      <input
        style={{ background: color }}
        onClick={() => func(color)}
        type="button"
        value={color}
      />
    </div>
  );
};

export default Button;
