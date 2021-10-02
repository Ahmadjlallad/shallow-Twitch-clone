import streamAPI from "./../API/streamAPI";
import {
  SING_IN,
  SING_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const stream = await streamAPI.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: stream.data });
};
const fetchStreams = () => async (dispatch) => {
  const { data: allStreams } = await streamAPI.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: allStreams });
};
const fetchStream = (id) => async (dispatch) => {
  const { data: stream } = await streamAPI.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: stream });
};
const deleteStream = (id) => async (dispatch) => {
  streamAPI.delete("/streams/" + id);
  dispatch({ type: DELETE_STREAM, payload: id });
};
const updateStream = (id, updateData) => async (dispatch) => {
  const { data: updated } = await streamAPI.put(`/streams/${id}`, updateData);
  dispatch({ type: EDIT_STREAM, payload: updated });
};
const singIn = (userId) => {
  return {
    type: SING_IN,
    payload: userId,
  };
};

const singOut = () => {
  return {
    type: SING_OUT,
  };
};

export {
  singIn,
  singOut,
  createStream,
  fetchStreams,
  fetchStream,
  deleteStream,
  updateStream,
};
