import testimonialActionTypes from './testimonialActionTypes';
export const fetchTestimonialStart=()=>({
    type:testimonialActionTypes.FETCH_TESTIMONIAL_START
});

export const fetchTestimonialSuccess=collectionMap=>({
    type:testimonialActionTypes.FETCH_TESTIMONIAL_SUCCESS,
    payload:collectionMap
});

export const fetchTestimonialFailure=message=>({
    type:testimonialActionTypes.FETCH_TESTIMONIAL_FAILURE,
    payload:message
});