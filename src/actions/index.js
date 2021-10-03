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
import history from "./../History";
const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const stream = await streamAPI.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: stream.data });
  // FIXME:
  //  * history object is passed and create from the browserRouter
  // * but in this case the action crater is not part of the browserRouter so
  // * we could pass it down the createStream but we have to do it every time we need to change the url in delete and edit
  // * so we can create are history object and don't let the browserRouter created
  history.push("/");
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
  await streamAPI.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
const updateStream = (id, updateData) => async (dispatch) => {
  const { data: updated } = await streamAPI.patch(`/streams/${id}`, updateData);
  dispatch({ type: EDIT_STREAM, payload: updated });
  history.push("/");
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
