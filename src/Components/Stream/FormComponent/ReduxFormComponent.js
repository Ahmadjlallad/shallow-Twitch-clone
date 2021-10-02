import React from "react";

const renderInput = ({ input, label, meta }) => {
  return (
    <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
      <label>{label}</label>
      <input {...input} />
      {meta.error && meta.touched && (
        <div className="ui error message">
          <div className="header"> {meta.error}</div>
        </div>
      )}
    </div>
  );
};
const validate = (formValues) => {
  // * the validation will be done using if statements
  // * to tall the error message
  // * we have to return an object with the key===to the name of the input field with the error message

  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
const onSubmit = (formValues, createStream) => {
  createStream(formValues);
};
export { renderInput, validate, onSubmit };
