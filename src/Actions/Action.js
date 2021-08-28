import { GET_USER,SET_USER,CREATE_POST,STORE_USER_DATA,DELETE_USER_DATA } from '../Action.Constant'

const getUser = () => ({
  type: GET_USER
});

const setUser = (user) => ({
  type: SET_USER,
  user
});

const createPost = (data,callBack) => ({
  type: CREATE_POST,
  payload: data,
  callBack,
})

const storeUserData = (data) => ({
  type: STORE_USER_DATA,
  payload: data,
})

const deleteUserData = (id, callBack) => ({
  type: DELETE_USER_DATA,
  payload: id,
  callBack,
})





export{ getUser, setUser, createPost,storeUserData,deleteUserData}



