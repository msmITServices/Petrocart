import bannerActionTypes from './bannerActionTypes';
export const fetchBannerStart=()=>({
    type:bannerActionTypes.FETCH_BANNER_START
});

export const fetchBannerSuccesss=collectionMap=>({
    type:bannerActionTypes.FETCH_BANNER_SUCCESS,
    payload:collectionMap
});

export const fetchBannerFailure=message=>({
    type:bannerActionTypes.FETCH_BANNER_FAILURE,
    payload:message
});