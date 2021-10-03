import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import StreamForm from "./StreamForm";
import { updateStream } from "./../../actions";
const StreamEdit = ({
  updateStream,
  stream: { title, description },
  fetchStream,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    fetchStream(+id);
  }, [fetchStream, id]);

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        createStreamOrEditStream={updateStream}
        streamId={id}
        initialValues={{ title, description }}
      />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { id: myId } = ownProps.match.params;

  /* 
* if we have an array of object not object =>
Object.values(state.streams).find(({ id }) => {
    console.log(Number(myId));
    console.log(id);
    return Number(myId) === id;
  });
  */
  // * for objects =>
  return {
    stream: state.streams[myId],
  };
};
export default connect(mapStateToProps, { fetchStream, updateStream })(
  StreamEdit
);
