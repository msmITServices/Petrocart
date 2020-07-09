import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import {sliderSecondaryReducer,sliderMainReducer} from '../slider/slider.reducer';

const rootReducer = combineReducers({
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  sliderMain:sliderMainReducer,
  sliderSecondary:sliderSecondaryReducer
});

export default rootReducer;
