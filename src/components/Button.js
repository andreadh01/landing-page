import React from 'react';

function Button(props) {
  return (
    <button
      type={props.type}
      className="w-3/4 py-2 bg-[#4c4c47] transition-all duration-1000 hover:bg-[#2d2d2a] text-white rounded-lg"
    >
      {props.text}
    </button>
  );
}

export default Button;
