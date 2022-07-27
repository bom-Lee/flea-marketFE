import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UPLOADING ="UPLOADING";
const UPLOAD_IMG="UPLOAD_IMG";

const uploading =createAction(UPLOADING, (uploading)=>({uploading}));
const uploadImg =createAction(UPLOADING, (image_url)=>({image_url}));

const initialState={
    image_url:'',
    uploading: false,
};
const uploadingFB =(image)=>{
    return function(dispatch,getState,{history}){
        dispatch(uploading(true));
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`);
        console.log("나는스토리지",storage,"나는 스토리지 Ref",storageRef);

        uploadBytes(storageRef, image).then((snapshot) => {
            console.log(snapshot,'이건 스냅샷');
            //이미지 업로드 파이어베이스에 업로드 하면 업로딩 끝남
            getDownloadURL(storageRef).then((url)=>{
                console.log(url,"나는 URL");
                dispatch(uploadImg(url));
            })
          });
    };//re
};//up

export default handleActions({
    [UPLOAD_IMG]: (state,action)=> produce(state,(draft)=>{
        draft.image_url=action.payload.image_url;
        draft.uploading(false);
    }),
    [UPLOADING]: (state,action)=> produce(state,(draft)=>{
        draft.uploading=action.payload.uploading;

    }),
},initialState);

const actionCreators={
    uploadImg,
    uploadingFB,
}

export {actionCreators};



// import { firestore, storage } from '../../shared/firebase';
// // import { getStorage } from "firebase/storage";

// // actions
// const UPLOADING = 'image/UPLOADING';
// const UPLOAD_IMAGE = 'image/UPLOAD_IMAGE';
// const SET_PREVIEW = 'image/SET_PREVIEW';

// export const uploading = (uploading) => {
//     return { type: UPLOADING, uploading };
// };

// export const uploadImage = (image_url) => {
//     return { type: UPLOAD_IMAGE, image_url };
// };

// export const setPreview = (preview) => {
//     return { type: SET_PREVIEW, preview };
// };

// // initial state
// const initialState = {
//     image_url: "http://via.placeholder.com/400x300",
//     uploading: false,
//     preview: null,
// };

// export const uploadImageFB = (image) => {
//     return function (dispatch, getState, {history}) {
    
//         dispatch(uploading(true));
        
//         console.log(`images/${new Date().getTime()}_${image.name}`);

//         const _upload = storage.ref(`images/${image.name}`).put(image);
    
//         //   업로드!
//         _upload.then((snapshot) => {
//           console.log(snapshot);
    
//           // 업로드한 파일의 다운로드 경로를 가져오자!
//           snapshot.ref.getDownloadURL().then((url) => {
//             dispatch(uploadImage(url));
//           });
//         }).catch(err => {
//             dispatch(uploading(false));
//         });
//     };
// };

//   //reducer
// export default function reducer(state = initialState, action = {}) {
//     switch (action.type) {
//         case 'image/UPLOADING':
//             state.uploading = action.uploading;
//             return state;
//         case 'image/UPLOAD_IMAGE':
//             state.image_url = action.image_url;
//             state.uploading = false;
//             return state;
//         case 'image/SET_PREVIEW':
//             state.preview = action.preview;
//             return state;
//         default:
//             return state;
//     };
// };