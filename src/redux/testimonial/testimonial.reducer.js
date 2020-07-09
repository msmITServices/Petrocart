import testimonialActionTypes from './testimonialActionTypes';

const INITIAL_STATE={
    testimonials:null,
    isFetching:false,
    errorMessage:undefined
};

export const testimonialReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case testimonialActionTypes.FETCH_TESTIMONIAL_START:
            return{
                ...state,
                isFetching:true
            }
        case testimonialActionTypes.FETCH_TESTIMONIAL_SUCCESS:
            return{
                ...state,
                isFetching:false,
                testimonials:action.payload
            }
        case testimonialActionTypes.FETCH_TESTIMONIAL_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}