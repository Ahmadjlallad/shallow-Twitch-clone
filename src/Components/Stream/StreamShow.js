import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "./../../actions";
import FlvJs from "flv.js";

const videoLoaderFlv = (ref, streams, video) => {
  if (!streams && !ref.current) return <div>...loading</div>;
  if (FlvJs.isSupported()) {
    video.attachMediaElement(ref.current);
    video.load();
  }
};
function StreamShow({
  streams,
  fetchStreams,
  match: {
    params: { id },
  },
}) {
  const videoRef = useRef();
  const flvPlayer = FlvJs.createPlayer({
    type: "flv",
    url: `ws://localhost:8000/live/${id}.flv`,
  });
  useEffect(() => {
    if (!streams) {
      fetchStreams(id);
    } else videoLoaderFlv(videoRef, streams, flvPlayer);
    console.log();
    return () => {
      flvPlayer.destroy();
      console.log("flvPlayer.destroy()");
    };
  }, [fetchStreams, id, streams, flvPlayer]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls></video>
      <h1 className="header">{streams?.title}</h1>
      <h5 className="description">{streams?.description}</h5>
    </div>
  );
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => {
  return {
    streams: state.streams[id],
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamShow);
