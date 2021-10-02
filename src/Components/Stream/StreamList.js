import React, { useEffect } from "react";
import { fetchStreams, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const renderDeleteAndEdit = ({ userId }, currentUserId) => {
  return userId === currentUserId ? (
    <div className="right floated content">
      <button className="ui button negative">Delete</button>
      <button className="ui button primary">Edit</button>
    </div>
  ) : null;
};

const renderStreamCards = (streams, currentUserId) => {
  return streams.map((stream) => {
    return (
      <div className="item" key={stream.id}>
        {renderDeleteAndEdit(stream, currentUserId)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <h3>{stream.title}</h3>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    );
  });
};
const renderCreateStream = (isSignedIn) => {
  return isSignedIn ? (
    <div style={{ textAlign: "right" }}>
      <Link to="/stream/create" className="ui primary button">
        Create Stream
      </Link>
    </div>
  ) : null;
};

function StreamList({ fetchStreams, streams, currentUserId, isSignedIn }) {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);
  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderStreamCards(streams, currentUserId)}
      </div>
      {renderCreateStream(isSignedIn)}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams, deleteStream })(
  StreamList
);
