import React, { useState, forwardRef } from "react";

//We use forwardRef to detrmine the correct ref to scroll to else scroll wont work

const RadioForm = forwardRef(
  (
    {
      title,
      value,
      setValue,
      name,
      required,
      submitClicked,
      options, // Add an options prop to pass the radio options dynamically
      dropdownOptions, // Add a dropdownOptions prop for the additional dropdown options
      isWithDropdown,
    },
    ref
  ) => {
    const [showDropdownOutside, setShowDropdownOutside] = useState(false); // State to control dropdown visibility

    return (
      <div className="form-group">
        <div className="Title-wrapper">
          <label ref={ref}>{title}</label>
          {required && submitClicked && value === "" && (
            <span className="required">*Erforderlich</span>
          )}
        </div>
        <div className="radio-group">
          {/* Render the radio buttons */}
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={(e) => {
                  setValue(e.target.value);
                  setShowDropdownOutside(false); // Hide dropdown when an option is selected
                }}
                required={required}
              />
              {option}
            </label>
          ))}

          {isWithDropdown && (
            <>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="Andere"
                  checked={showDropdownOutside}
                  onChange={() => setShowDropdownOutside(true)}
                />
                Andere
              </label>

              {/* Show dropdown if "Andere" is selected */}
              {showDropdownOutside && (
                <select
                  value={value !== "" && !options.includes(value) ? value : ""}
                  onChange={(e) => setValue(e.target.value)}
                  required
                  className="options"
                >
                  <option value="" disabled>
                    Wähle eine Farbe
                  </option>
                  {dropdownOptions.map((dropdownOption, index) => (
                    <option key={index} value={dropdownOption}>
                      {dropdownOption}
                    </option>
                  ))}
                </select>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

export default RadioForm;
