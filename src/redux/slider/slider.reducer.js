import sliderActionTypes from './sliderActionTypes';

const INITIAL_MAIN_STATE={
    collections:null,
    isFetching:false,
    errorMessage:undefined
};

export const sliderMainReducer=(state=INITIAL_MAIN_STATE,action)=>{
    switch(action.type){
        case sliderActionTypes.FETCH_SLIDER_MAIN_START:
            return{
                ...state,
                isFetching:true
            }
        case sliderActionTypes.FETCH_SLIDER_MAIN_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case sliderActionTypes.FETCH_SLIDER_MAIN_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}
const INITIAL_SECONDARY_STATE={
    collections:null,
    isFetching:false,
    errorMessage:undefined
};

export const sliderSecondaryReducer=(state=INITIAL_SECONDARY_STATE,action)=>{
    switch(action.type){
        case sliderActionTypes.FETCH_SLIDER_SECONDARY_START:
            return{
                ...state,
                isFetching:true
            }
        case sliderActionTypes.FETCH_SLIDER_SECONDARY_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        case sliderActionTypes.FETCH_SLIDER_SECONDARY_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}