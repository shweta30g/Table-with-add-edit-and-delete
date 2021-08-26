import { GET_USER,SET_USER,CREATE_POST,STORE_USER_DATA } from '../Action.Constant'

const getUser = () => ({
  type: GET_USER
});

const setUser = (user) => ({
  type: SET_USER,
  user
});

const createPost = (data) => ({
  type: CREATE_POST,
  payload: data 
})

const storeUserData = (data) => ({
  type: STORE_USER_DATA,
  payload: data,
})



export{ getUser, setUser, createPost,storeUserData}



