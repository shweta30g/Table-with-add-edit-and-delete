import { takeEvery} from "redux-saga/effects";
import { handleGetUser,createPostSaga} from "../Saga/Handler";
import { GET_USER,CREATE_POST } from "../Action.Constant";


export function* watcherSaga() {
  // console.log("root")
  yield takeEvery(GET_USER, handleGetUser);
  yield takeEvery(CREATE_POST, createPostSaga)
}
