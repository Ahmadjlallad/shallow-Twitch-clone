import React, { useEffect } from "react";
import Model from "../model";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import History from "../../History";
import { Link } from "react-router-dom";

const RenderActions = ({ id, deleteStream }) => {
  return (
    <>
      <button
        onClick={() => {
          deleteStream(id);
        }}
        className="ui primary button"
      >
        Delete
      </button>
      <Link to={"/"} className="ui cancel button">
        Cancel
      </Link>
    </>
  );
};
function StreamDelete({
  fetchStream,
  deleteStream,
  stream,
  match: {
    params: { id },
  },
}) {
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  return (
    <Model
      title="Delete Stream"
      content={
        stream
          ? `Are you sure you want to delete the stream Title: ${stream.title}`
          : "Are you sure you want to delete the stream"
      }
      // action={renderActions}
      onDismiss={() => History.push("/")}
    >
      <RenderActions id={id} deleteStream={deleteStream} />
    </Model>
  );
}
const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
