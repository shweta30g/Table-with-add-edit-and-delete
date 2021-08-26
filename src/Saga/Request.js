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
  return axios.request({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts", 
    data,
  })
}