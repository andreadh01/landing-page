import React from 'react';

function Card(props) {
  return (
    <div
      onClick={props.clicked}
      className="max-w-xs max-h-96 p-6 transition-all duration-1000 dark:hover:bg-[#2d2d2a] rounded-md overflow-hidden shadow-lg bg-[#edf3e9] dark:bg-[#4c4c47] flex-col flex items-center justify-center"
    >
      {props.url && (
        <img
          className="w-fit max-h-[180px] mb-4 rounded-[30px]"
          src={props.url}
          alt=""
        />
      )}
      <div className="px-6  text-[#2d2d2a] dark:text-[#edf3e9]">
        <div className="text-center font-bold text-xl">{props.title}</div>
        <div className="">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;
