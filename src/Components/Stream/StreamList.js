import React, { useEffect } from "react";
import { fetchStreams, deleteStream } from "../../actions";
import { connect } from "react-redux";

import { renderStreamCards, renderCreateStream } from "./streamListHelper";

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
