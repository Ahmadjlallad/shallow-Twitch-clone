import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  renderInput,
  validate,
  onSubmit,
} from "./FormComponent/ReduxFormComponent";
import { connect } from "react-redux";
import { createStream } from "../../actions";

function StreamCreate(props) {
  // reduxForm give us a props object with a lot of methods
  // * we have props.handleSubmit give us the useful method to submit the form
  return (
    <form
      className="ui form error"
      onSubmit={props.handleSubmit((value) =>
        onSubmit(value, props.createStream)
      )}
    >
      {/*Filed jsx takes a x number of props but the require props is the name*/}
      {/*Filed font know how to show something on the screen so we have to pass the actually component={}*/}
      {/* we have to handle the vallation 
      - 1 - validate(formValues)
      */}
      <Field name="title" component={renderInput} label={"Title"} />
      <Field name="description" component={renderInput} label={"Description"} />
      <button className="ui button primary" type="submit">
        Submit
      </button>
    </form>
  );
}
// FIXME // * reduxForm works like connect it takes a config object form: is the identifier of the form
// * - 2  validate is a function that takes the form values and return an object with the errors that we be on mate the form
export default connect(null, { createStream })(
  reduxForm({ form: "create", validate })(StreamCreate)
);
