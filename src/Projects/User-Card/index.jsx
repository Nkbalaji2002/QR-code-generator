import React from "react";
import User from "./User";

const UserCard = () => {
  return (
    <>
      <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <User
            name={"John Doe"}
            title={"Software Engineer"}
            image={""}
            description={
              "Passionate Developer With a love for creating amazing applications"
            }
          />
          <User
            name={"John Doe"}
            title={"Software Engineer"}
            image={""}
            description={
              "Passionate Developer With a love for creating amazing applications"
            }
          />
        </div>
      </>
    </>
  );
};

export default UserCard;
