import bannerActionTypes from './bannerActionTypes';

const INITIAL_MAIN_STATE={
    collections:null,
    isFetching:false,
    errorMessage:undefined
};

export const bannerReducer=(state=INITIAL_MAIN_STATE,action)=>{
    switch(action.type){
        case bannerActionTypes.FETCH_BANNER_START:
            return{
                ...state,
                isFetching:true
            }
        case bannerActionTypes.FETCH_BANNER_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case bannerActionTypes.FETCH_BANNER_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}