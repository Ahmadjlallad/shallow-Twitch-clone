import React from "react";
import StreamForm from "./StreamForm";

import { connect } from "react-redux";
import { createStream } from "../../actions";

function StreamCreate(props) {
  // reduxForm give us a props object with a lot of methods
  // * we have props.handleSubmit give us the useful method to submit the form

  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm createStreamOrEditStream={props.createStream} />
    </div>
  );
}
// FIXME // * reduxForm works like connect it takes a config object form: is the identifier of the form
// * - 2  validate is a function that takes the form values and return an object with the errors that we be on mate the form
export default connect(null, { createStream })(StreamCreate);
