import React from "react";

import { Link } from "react-router-dom";
const renderDeleteAndEdit = ({ userId, id }, currentUserId) => {
  return userId === currentUserId ? (
    <div className="right floated content">
      <Link to={`/stream/delete/${id}`} className="ui button negative">
        Delete
      </Link>
      <Link to={`/stream/edit/${id}`} className="ui button primary">
        Edit
      </Link>
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
export { renderStreamCards, renderCreateStream };
