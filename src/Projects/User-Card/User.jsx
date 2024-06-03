import React from "react";

const User = ({ name, title, image, description }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white mx-3">
        <img src={image} alt={name} className="w-full rounded-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{title}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </>
  );
};

export default User;
