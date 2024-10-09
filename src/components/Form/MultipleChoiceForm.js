import React, { forwardRef } from "react";
import "./Form.css";

// We use forwardRef to determine the correct ref to scroll to
const MulipleChoiceForm = forwardRef(
  (
    {
      title,
      values, // An array to hold selected values
      setValues, // Function to update selected values
      name,
      required,
      submitClicked,
      options, // Options for checkboxes
    },
    ref
  ) => {
    // Function to handle checkbox changes
    const handleCheckboxChange = (option) => {
      if (values.includes(option)) {
        setValues(values.filter((item) => item !== option));
      } else {
        setValues([...values, option]);
      }
    };

    return (
      <div className="form-group">
        <div className="Title-wrapper">
          <label ref={ref}>{title}</label>
          {required && submitClicked && values.length === 0 && (
            <span className="required">*Erforderlich</span>
          )}
        </div>
        <div className="checkbox-group">
          {/* Render the checkboxes */}
          {options.map((option, index) => (
            <label key={index} className="multipleChoiceLabel">
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={values.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  }
);

export default MulipleChoiceForm;
