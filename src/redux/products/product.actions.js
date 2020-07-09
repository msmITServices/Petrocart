import productsActionTypes from './productActionTypes';
export const fetchProductsStart=()=>({
    type:productsActionTypes.FETCH_PRODUCT_START
});

export const fetchProductsSuccesss=collectionMap=>({
    type:productsActionTypes.FETCH_PRODUCT_SUCCESS,
    payload:collectionMap
});

export const fetchProductsFailure=message=>({
    type:productsActionTypes.FETCH_PRODUCT_FAILURE,
    payload:message
});