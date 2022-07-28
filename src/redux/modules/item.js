import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'
import Item from "../../components/Item";

// Actions
const LOAD = "item/LOAD";
const SETITEM = "item/SETITEM";
const ADDITEM = "item/ADDITEM";
 
// Action Creators
  export function loadItem(item) {
  return { type: LOAD, item }
}

const loading = createAction(LOAD, (is_loading) => ({ is_loading }));
const setItems = createAction(SETITEM,(item)=>({item}));
const addItems = createAction(ADDITEM, (item) => ({item}));

const initialState = {
  items: [],
  itemone: {},

  isLoading: false,
};

// const initialState = {
//   items: [
//     {
//       username: "spring123@gmail.com",
//       nickname: "봄봄",
//       images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
//       itemName: "개발자 머그컵 팝니다",
//       itemPrice: "5000",
//       itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
//       city: "대구시",
//       comment: [
//         {
//           userid: 1,
//           nickname: "봄봄",
//           comment: "구경 잘하고 갑니다~"
//         }
//       ]
//     },
//     {
//       username: "spring123@gmail.com",
//       nickname: "봄봄",
//       images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
//       itemName: "개발자 머그컵 팝니다",
//       itemPrice: "5000",
//       itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
//       city: "대구시",
//       comment: [
//         {
//           userid: 1,
//           nickname: "봄봄",
//           comment: "구경 잘하고 갑니다~"
//         }
//       ]
//     },
//     {
//       username: "spring123@gmail.com",
//       nickname: "봄봄",
//       images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
//       itemName: "개발자 머그컵 팝니다",
//       itemPrice: "5000",
//       itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
//       city: "대구시",
//       comment: [
//         {
//           id: 1,
//           nickname: "봄봄",
//           comment: "구경 잘하고 갑니다~"
//         }
//       ]
//     },
//     {
//       username: "spring123@gmail.com",
//       nickname: "봄봄",
//       images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
//       itemName: "개발자 머그컵 팝니다",
//       itemPrice: "5000",
//       itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
//       city: "대구시",
//       comment: [
//         {
//           nickname: "봄봄",
//           comment: "구경 잘하고 갑니다~"
//         }
//       ]
//     },
    
//     ],
//     itemone: {
//       username: "spring123@gmail.com",
//       nickname: "봄봄",
//       images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
//       itemName: "개발자 머그컵 팝니다",
//       itemPrice: "5000",
//       itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
//       city: "대구시",
//       comment: [
//         {
//           nickname: "봄봄",
//           comment: "구경 잘하고 갑니다~"
//         }
//       ]
//     },
    
//   isLoading: false,
// };

// const mockAPl = 'https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529'
const items_API = 'http://13.209.167.96/'
const getItemsAPI = () => {
  return function (dispatch, getState, { navigate }) {
    dispatch(loading(true));
    axios
      .get(items_API)
      .then((resp) => {
        dispatch(setItems(resp.data));
        dispatch(loading(false));
      })
      .catch((e) => console.error(e));
  };
};

const addItemsAPI = (itemName, image, itemPrice, itemDetail) => {
  return function (dispatch, getState, { navigate }){
    axios({
      method: "POST",
      url: "http://13.209.167.96/item/update",
      headers: {
          "Accept": "application/json",
          "Content-Type":"application/json;charset=UTF-8",
          'Access-Control-Allow-Origin' : '*'
      },
      data: {
        itemName: "",
        image: "",
        itemPrice: "",
        itemDetail: ""
      }
    }).then((res)=>{
      console.log(res);
      dispatch(addItems(res.data))
      navigate("/");
    }).catch(error=>{
      console.log(error);
    });  
  };
};

const getOneItemAPI = (id) => {
  return function (dispatch, getState, {history}) {
    dispatch(loading(true));
    axios
    .get(items_API)
    .then((resp)=>{
      const item_list = resp.data;
      const item_idx = item_list.findIndex(p => p.pid === Number(id));
      const item = item_list[item_idx];
      console.log(item);
      dispatch(setItems([item]));
      dispatch(loading(false));
    })
    .catch((e) => console.error(e));
  }
}

// Reducer
// export default function reducer(State = initialState, action = {} ) {
//   switch (action.type) {
//     case "item/LOAD": {
//       return { item: action.item }
//     }

//     default: return State;
//   }
// }


export default handleActions(
  {   
    [SETITEM]: (state, action) =>
      Item(state, (draft) => {
      draft.isLoading = action.payload.is_loading;
      draft.item_list= action.payload.data
    }),
    [LOAD]: (state, action) =>
      Item(state, (draft) => {
      draft.isLoading = action.payload.is_loading;
    }),
    [ADDITEM]: (state, action) =>
      Item(state, (draft) => {
      draft.item_list.unshift(action.payload.data); 
    }),

  },
  initialState
);

const actionCreators = {
  setItems,
  getItemsAPI,
  getOneItemAPI,
  addItems,
  addItemsAPI,
};

export { actionCreators };