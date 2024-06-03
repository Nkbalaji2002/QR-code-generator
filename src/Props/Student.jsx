import React from "react";
import propTypes from "prop-types";

const Student = ({ name, age, isMarried }) => {
  return (
    <>
      <div className="student">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{age}</td>
            </tr>
            <tr>
              <th>isMarried</th>
              <td>{isMarried ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isMarried: propTypes.bool,
};

Student.defaultProps = {
  name: "No Name",
  age: 0,
  isMarried: false,
};

export default Student;
