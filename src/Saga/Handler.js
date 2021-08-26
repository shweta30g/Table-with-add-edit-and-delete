import { call, put } from "redux-saga/effects";
import { setUser} from "../Actions/Action";
import { requestGetUser,createUserReq} from "../Saga/Request";

export function* handleGetUser(action) {

  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    console.log("handle")
    yield put(setUser(data));

  } catch (error) {
    console.log(error);
  }
}

export function* createPostSaga(action) {
  try{
    const response = yield call(createUserReq,action.payload); //para: data
    console.log("create", response)

  } catch (error) {
    console.log(error);
  }
    
  
}

