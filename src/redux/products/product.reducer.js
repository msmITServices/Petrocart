import productActionTypes from './productActionTypes';
import {productsWithFullUri} from './products.util'
const INITIAL_STATE={
    products:null,
    isFetching:false,
    errorMessage:undefined
};

export const productReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case productActionTypes.FETCH_PRODUCT_START:
            return{
                ...state,
                isFetching:true
            }
        case productActionTypes.FETCH_PRODUCT_SUCCESS:
            
            return{
                ...state,
                isFetching:false,
                products:productsWithFullUri(action.payload)
            }
        case productActionTypes.FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}