import React from 'react';

function Success() {
  return (
    <div className="bg-[#c0d9c2] w-screen min-h-screen flex justify-center items-center">
      <img
        className="w-[150px] p-4 absolute left-0 top-0"
        src="/images/logo/logo-light.png"
        alt=""
      />
      <div className="w-full max-w-lg py-16 px-10 rounded-lg bg-white text-[#4c4c47]">
        <h1 className="text-5xl font-bold text-center mb-4">
          An email has been sent to you with the next steps!
        </h1>
        <h3 className="text-2xl text-center">See you on the course!</h3>
      </div>
    </div>
  );
}

export default Success;
