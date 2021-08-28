import { call, put } from "redux-saga/effects";
import { setUser} from "../Actions/Action";
import { requestGetUser,createUserReq,deleteUserReq} from "../Saga/Request";

export function* handleGetUser(action) {

  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));

  } catch (error) {
    console.log(error);
  }
}

export function* createPostSaga(action) {
  try{
    const response = yield call(createUserReq,action.payload); //para: data
    if(response) {
      action.callBack();
    }
    console.log("create", response)

  } catch (error) {
    console.log(error);
  }
}
  export function* deleteDataSaga(action) {
    try{
      const response = yield call(deleteUserReq,action.payload); 
      if(response){
        action.callBack();
      }
      console.log("data got deleted", response)
  
    } catch (error) {
      console.log(error);
    }
    
  }
  


