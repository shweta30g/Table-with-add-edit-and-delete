import axios from "axios";

export function requestGetUser() {
 // console.log("request api")
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  });
}

//post 
export function createUserReq(data) {
  if(data.id) {
    return axios.request({
      method: "patch",
      url: `https://jsonplaceholder.typicode.com/posts/${data.id}`, 
      data,
    })
  } else{
    return axios.request({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts", 
      data,
    })
  }
}

export function deleteUserReq(id) {
  return axios.request({
    method: "delete",
    url: `https://jsonplaceholder.typicode.com/posts/${id}`, 
    id,
  })
}