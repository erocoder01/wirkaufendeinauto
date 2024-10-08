import React, { forwardRef } from "react";

//We use forwardRef to detrmine the correct ref to scroll to else scroll wont work
const TextForm = forwardRef(
  (
    { title, value, setValue, name, id, placeholder, required, submitClicked },
    ref
  ) => {
    return (
      <div className="second-page-input-wrapper">
        <div className="Title-wrapper" ref={ref}>
          <label htmlFor={id}>{title}</label>
          {required && submitClicked && value === "" && (
            <span className="required">*Erforderlich</span>
          )}
        </div>
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      </div>
    );
  }
);

export default TextForm;
