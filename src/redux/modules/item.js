import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

// Actions
const LOAD = "item/LOAD";
// const LOADING = "LOADING";
// const SET_ITEM = "SET_ITEM";
// const ADD_ITEM = "ADD_ITEM";
 
// Action Creators
<<<<<<< HEAD
=======

>>>>>>> faedde405d57bcc624b93539478bcff475315adc
  export function loadItem(items) {
  return { type: LOAD, items }
}

// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
// const setItems = createAction(SET_ITEMS,(data)=>({data}));
// const addItems = createAction(ADD_ITEMS, (data) => ({data}));

// const initialState = {
//   product_list: [],
//   isLoading: false,
// };

const initialState = {
  items: [
    {
      username: "spring123@gmail.com",
      nickname: "봄봄",
      images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
      itemName: "개발자 머그컵 팝니다",
      itemPrice: "5000",
      itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
      city: "대구시",
      comment: [
        {
          nickname: "봄봄",
          comment: "구경 잘하고 갑니다~"
<<<<<<< HEAD
        },
        {
          nickname: "123",
          comment: "100원 안될까요?"
        },
        {
          nickname: "dd",
          comment: "커피커피"
        },

      ]
    }
    ],
  
=======
        }
      ]
    },
    {
      username: "spring123@gmail.com",
      nickname: "봄봄",
      images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
      itemName: "개발자 머그컵 팝니다",
      itemPrice: "5000",
      itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
      city: "대구시",
      comment: [
        {
          nickname: "봄봄",
          comment: "구경 잘하고 갑니다~"
        }
      ]
    },
    {
      username: "spring123@gmail.com",
      nickname: "봄봄",
      images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
      itemName: "개발자 머그컵 팝니다",
      itemPrice: "5000",
      itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
      city: "대구시",
      comment: [
        {
          nickname: "봄봄",
          comment: "구경 잘하고 갑니다~"
        }
      ]
    },
    {
      username: "spring123@gmail.com",
      nickname: "봄봄",
      images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
      itemName: "개발자 머그컵 팝니다",
      itemPrice: "5000",
      itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
      city: "대구시",
      comment: [
        {
          nickname: "봄봄",
          comment: "구경 잘하고 갑니다~"
        }
      ]
    },
    
    ],
    item: {
      username: "spring123@gmail.com",
      nickname: "봄봄",
      images: "https://images.unsplash.com/photo-1515165737480-16f5a6cff26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
      itemName: "개발자 머그컵 팝니다",
      itemPrice: "5000",
      itemDetail: "뉴 커피.. 일이 끝나지 않았다면.. 커피가 비어있다면 설탕과 크림으로 커피를 리필한다.. 커피를 리필한 다음 홀짝이며 작업을 실행한다..",
      city: "대구시",
      comment: [
        {
          nickname: "봄봄",
          comment: "구경 잘하고 갑니다~"
        }
      ]
    },
    
>>>>>>> faedde405d57bcc624b93539478bcff475315adc
  isLoading: false,
};

// // const mockAPl = 'https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529'
// const products_API = 'http://15.165.158.39/'
// const getProductsAPI = () => {
//   return function (dispatch, getState, { history }) {
//     dispatch(loading(true));
//     axios
//       .get(products_API)
//       .then((resp) => {
//         dispatch(setProducts(resp.data));
//         dispatch(loading(false));
//       })
//       .catch((e) => console.error(e));
//   };
// };

// const addProductsAPI = (title,location,status,tradable,price,deliver,description,keyword,num) => {
//   return function (dispatch, getState, {history}){
//     axios({
//       method: "POST",
//       url: "http://15.165.158.39/api/products/new",
//       headers: {
//           "Accept": "application/json",
//           "Content-Type":"application/json;charset=UTF-8",
//           'Access-Control-Allow-Origin' : '*'
//       },
//       data: {
//         username: "",
//         nickname: "",
//         pw: "",
//         city: ""
//       }
//     }).then((res)=>{
//       console.log(res);
//       dispatch(addProducts(res.data))
//       history.push("/");
//     }).catch(error=>{
//       console.log(error);
//     });  
//   };
// };

// const getOneProductAPI = (id) => {
//   return function (dispatch, getState, {history}) {
//     dispatch(loading(true));
//     axios
//     .get(products_API)
//     .then((resp)=>{
//       const product_list = resp.data;
//       const product_idx = product_list.findIndex(p => p.pid === Number(id));
//       const product = product_list[product_idx];
//       console.log(product);
//       dispatch(setProducts([product]));
//       dispatch(loading(false));
//     })
//     .catch((e) => console.error(e));
//   }
// }

// Reducer
export default function reducer(State = initialState, action = {} ) {
  switch (action.type) {
    case "item/LOAD": {
      return { item: action.item }
    }

    default: return State;
  }
}


// export default handleActions(
//   {   
//     [SET_PRODUCTS]: (state, action) =>
//       produce(state, (draft) => {
//       draft.isLoading = action.payload.is_loading;
//       draft.product_list= action.payload.data
//     }),
//     [LOADING]: (state, action) =>
//       produce(state, (draft) => {
//       draft.isLoading = action.payload.is_loading;
//     }),
//     [ADD_PRODUCTS]: (state, action) =>
//       produce(state, (draft) => {
//       draft.product_list.unshift(action.payload.data); 
//     }),

//   },
//   initialState
// );

// const actionCreators = {
//   setProducts,
//   getProductsAPI,
//   getOneProductAPI,
//   addProducts,
//   addProductsAPI,
// };

// export { actionCreators };