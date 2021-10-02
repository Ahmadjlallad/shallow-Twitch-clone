import { combineReducers } from "redux";
import authRed from "./authRed";
import { reducer as FormReducer } from "redux-form";
import StreamsReduces from "./StreamsReduces";
export default combineReducers({
  auth: authRed,
  form: FormReducer,
  streams: StreamsReduces,
});
