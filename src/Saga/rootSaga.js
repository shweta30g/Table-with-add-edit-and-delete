import { takeEvery} from "redux-saga/effects";
import { handleGetUser,createPostSaga, deleteDataSaga} from "../Saga/Handler";
import { GET_USER,CREATE_POST,DELETE_USER_DATA } from "../Action.Constant";


export function* watcherSaga() {
  // console.log("root")
  yield takeEvery(GET_USER, handleGetUser);
  yield takeEvery(CREATE_POST, createPostSaga);
  yield takeEvery(DELETE_USER_DATA, deleteDataSaga);
}
