import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

// Actions
const LOAD = "item/LOAD";
// const LOADING = "LOADING";
// const SET_ITEM = "SET_ITEM";
// const ADD_ITEM = "ADD_ITEM";
 
// Action Creators
  export function loadItem(item) {
  return { type: LOAD, item }
}

// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
// const setItems = createAction(SET_ITEMS,(data)=>({data}));
// const addItems = createAction(ADD_ITEMS, (data) => ({data}));

// const initialState = {
//   product_list: [],
//   isLoading: false,
// };

const initialState = {
  item: [
    {
      username: "spring123@gmail.com",
      nickname: "봄봄",
      images: "https://unsplash.com/photos/q9HFIVO9owM",
      title: "개발자 머그컵 팝니다",
      price: "5000",
      city: "대구시"
  }
    ],
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
export default function reducer(state = initialState, action = {} ) {
  switch (action.type) {
    case "item/LOAD": {
      return { item: action.item }
    }

    default: return state;
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