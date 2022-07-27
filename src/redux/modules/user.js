import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// //actions
const LOAD = "users/LOAD";
const CREATE = "users/CREATE";
// const LOG_IN = "LOG_IN"; //로그인
// const LOG_OUT = "LOG_OUT"; //로그아웃
// const LOGIN_CHECK = 'LOGIN_CHECK';
// const GET_USER = "GET_USER"; //유저정보 가져오기

// //actionCreators
export function loadPost(users) {
    return { type: LOAD, users}
  }
  export function createList(users) {
      return { type: CREATE, users };
    }
// const logIn = createAction(LOG_IN, (user) => ({user}));
// const logOut = createAction(LOG_OUT, (user) => ({user}));
// const loginCheck = createAction(LOGIN_CHECK, (session) => ({session}));
// const getUser = createAction(GET_USER, (user) => ({user}));


//initialState
// const initialState = {
//     user_list: [],
//     is_login: false,
// };
const initialState = {
    users: [
        {
            username: "spring123@gmail.com",
            nickname: "봄봄",
            pw: "bombom123",
            city: "대구시"
        },
        {
          username: "ondoo@gmail.com",
            nickname: "온두",
            pw: "ondoo123",
            city: "고양시"

        }
    ]
}

// //로그인api
// const loginAPI = (username,pw) => {
//     return function (dispatch, getState, { navigate }) {
//         axios({
//             method: "POST",
//             url: "http://15.165.158.39/login",
//             headers: {
//                 "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
//                 "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
//                 'Access-Control-Allow-Origin' : '*'
//             },
//             data: {
//                 "username":username,
//                 "pw": pw,
//             }
//         }).then((res)=>{
//             console.log(res);
//             localStorage.setItem("name", JSON.stringify(`${username}`)); //localStorage의 텍스트형이므로 객체 json.stringfy로 변환
//             sessionStorage.setItem("token", res.data);
//             dispatch(logIn({
//                 username:username,
//                 pw:pw,
//             }));
//             navigate.push("/");
//             window.alert("정상적으로 로그인 되었습니다!")
//         }).catch(error=>{
//             console.log(error);
//             window.alert("로그인 실패!");
//         });

//     };
// };

// //로그아웃
// const logOutApi = () =>{
//     return function (dispatch, getState, { navigate }){
//         localStorage.removeItem("name");
//         sessionStorage.removeItem("token");
//         dispatch(logOut());
//         navigate.replace("/");
//     }

// }

// //회원가입api
// const SignUPApi = (username,pw) => {
//     return function (dispatch, getState, { navigate }){
//         axios({
//             method: "POST",
//             url: "http://15.165.158.39/signup",
//             headers: {
//                 "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
//                 "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
//                 'Access-Control-Allow-Origin' : '*'
//             },
//             data: {
//                 "username":username,
//                 "pw": pw,
//             }
//         }).then((res)=>{
//             console.log(res);
//             history.push("/login");
//             window.alert("축하합니다! 회원가입 되었습니다!")
//         }).catch(error=>{
//             console.log(error);
//             window.alert("회원가입 실패!");
//         });
//     }
// };



//Reducer
export default function reducer(state = initialState, action = {} ) {
    switch (action.type) {
      case "users/LOAD": {
        return state;
      }
      case "users/CREATE": {
          console.log(state);
          const new_user = [...state.users, action.users];
          return { users: new_user };
        }
  
      default: return state;
    }
  }
// export default handleActions({
//     [LOGIN_CHECK]: (state,action) => produce(state,(draft) => {
//         draft.is_login = action.payload.session;
//     }),
//     [LOG_IN]: (state,action) => produce(state,(draft) => {
//         draft.user = action.payload.user;
//         draft.is_login = true;
//     }),
//     [LOG_OUT]: (state,action) => produce(state,(draft) => {
//         draft.user = null;
//         draft.is_login = false;
//     }),
//     [GET_USER]: (state, action) => produce(state, (draft) => {
        
//     }),

// }, initialState);


// //action creator export
// const actionCreators = {
//     loginCheck,
//     logIn,
//     logOut,
//     getUser,
//     loginAPI,
//     logOutApi,
//     SignUPApi,

// };

// export {actionCreators};