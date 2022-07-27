import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import cookie from 'react-cookie'
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";

import axios from 'axios';
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();


// //actions
// const LOAD = "users/LOAD";
// const CREATE = "users/CREATE";

const LOGIN = "users/LOGIN"; // 로그인
const LOGOUT = "users/LOGOUT"; // 로그아웃
const LOGINCHECK = 'users/LOGINCHECK'; // 로그인 체크
const GETUSER = "users/GETUSER"; // 유저정보 가져오기

// // //actionCreators
// export function loadPost(users) {
//     return { type: GETUSER, users}
//   }
//   export function createList(users) {
//       return { type: LOGIN, users };
//     }


const logIn = createAction(LOGIN, (user) => ({user}));
const logOut = createAction(LOGOUT, (user) => ({user}));
const loginCheck = createAction(LOGINCHECK, (session) => ({session}));
const getUser = createAction(GETUSER, (user) => ({user}));


// initialState
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

        },
        {
          username: "1234@naver.com",
          nickname: "da12",
          pw: "abc12",
          city: "영주시"
          }
    ]
}

// 로그인 api // 배열로 값을 준다 => userid?
const loginAPI = (username, pw) => {
    return function (dispatch, getState, { navigate }) {
        const token = getCookie("is_login");
        axios({
            method: "POST",
            url: "http://13.209.167.96/user/login",
            headers: {
                "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : `Bearer ${token}`,

            },
            data: {
                "username": username,
                "pw": pw,
            }
        }).then((res)=>{
            console.log(res);
            // const accessToken = res.data.token;
            //쿠키에 토큰 저장
    //         setCookie("is_login", `${accessToken}`);
    //         document.location.href = "/";
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    // };
            localStorage.setItem("name", JSON.stringify(`${username}`)); //localStorage의 텍스트형이므로 객체 json.stringfy로 변환
            sessionStorage.setItem("token", res.data);
            dispatch(logIn({
                username:username,
                pw:pw,
            }));


            navigate("/");
            window.alert("정상적으로 로그인 되었습니다!")
        }).catch(error=>{
            console.log(error);
            window.alert("로그인 실패!");
        });

    };
};

// 로그아웃
const logOutApi = () =>{
    return function (dispatch, getState, { navigate }){
        localStorage.removeItem("name");
        sessionStorage.removeItem("token");
        dispatch(logOut());
        navigate("/");
    }

}

// 회원가입 api
const SignUPApi = (username, nickname, pw, city) => {
    return function (dispatch, getState, { navigate }){
        console.log("SignUPApi", username, nickname, pw, city)
        axios({
            method: "POST",
            url: "http://13.209.167.96//user/join",
            headers: {
                "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                'Access-Control-Allow-Origin' : '*'
            },
            data: {
                "username": username,
                "nickname": nickname,
                "pw": pw,
                "city": city
            }
        }).then((res)=>{
            console.log(res);
            navigate("/login");
            window.alert("축하합니다! 회원가입 되었습니다!")
        }).catch(error=>{
            console.log(error);
            window.alert("회원가입 실패!");
        });
    }
};



// Reducer
// export default function reducer(state = initialState, action = {} ) {
//     switch (action.type) {
//       case "users/LOAD": {
//         return state;
//       }
//       case "users/CREATE": {
//           console.log(state);
//           const new_user = [...state.users, action.users];
//           return { users: new_user };
//         }
  
//       default: return state;
//     }
//   }

// import { LOGIN_USER, REGISTER_USER } from '../_actions/types';
// export default function (state = {}, action) {
//   switch (action.type) {
//     case LOGIN_USER:
//       return { ...state, loginSuccess: action.payload };

//     case REGISTER_USER:
//       return { ...state, registerSuccess: action.payload };

//     default:
//       return state;
//   }
// }

export default handleActions({
    [LOGINCHECK]: (state, action) => produce(state,(draft) => {
        draft.is_login = action.payload.session;
    }),
    [LOGIN]: (state, action) => produce(state,(draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOGOUT]: (state, action) => produce(state,(draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GETUSER]: (state, action) => produce(state, (draft) => {
        
    }),

}, initialState);


//action creator export
const actionCreators = {
    loginCheck,
    logIn,
    logOut,
    getUser,
    loginAPI,
    logOutApi,
    SignUPApi,
};

export { actionCreators };