import React from "react";

const Question = ({
  question,
  options,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <>
      <div className="">
        <h2 className="">{question}</h2>
        <ul>
          {options.map((option, index) => (
            <>
              <li key={index} className="mb-2">
                <label className="">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    className="form-radio"
                  />
                  <span>{option}</span>
                </label>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Question;
