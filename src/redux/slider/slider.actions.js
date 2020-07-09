import sliderActionTypes from './sliderActionTypes';
export const fetchSliderMainStart=()=>({
    type:sliderActionTypes.FETCH_SLIDER_MAIN_START
});

export const fetchSliderMainSuccess=collectionMap=>({
    type:sliderActionTypes.FETCH_SLIDER_MAIN_SUCCESS,
    payload:collectionMap
});

export const fetchSliderMainFailure=message=>({
    type:sliderActionTypes.FETCH_SLIDER_MAIN_FAILURE,
    payload:message
});

export const fetchSliderSecondaryStart=()=>({
    type:sliderActionTypes.FETCH_SLIDER_SECONDARY_START
});

export const fetchSliderSecondarySuccess=collectionMap=>({
    type:sliderActionTypes.FETCH_SLIDER_SECONDARY_SUCCESS,
    payload:collectionMap
});

export const fetchSliderSecondaryFailure=message=>({
    type:sliderActionTypes.FETCH_SLIDER_SECONDARY_FAILURE,
    payload:message
});