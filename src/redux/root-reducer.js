import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import productReducer from "./reducers/productReducer";
import cartReducer from "./cart/cart.reducer";
import wishlistReducer from "./reducers/wishlistReducer";
import compareReducer from "./reducers/compareReducer";
import { combineReducers } from "redux";
import {sliderSecondaryReducer,sliderMainReducer} from './slider/slider.reducer';
import {bannerReducer} from './banner/banner.reducer';
import {productReducer} from './products/product.reducer';
import {testimonialReducer} from './testimonial/testimonial.reducer';

const persistConfig={
    key:'root',
    storage,
    whitelist:[]
}

const rootReducer=combineReducers({
    products:productReducer,
    cart:cartReducer,
    wishlist:wishlistReducer,
    compare:compareReducer,
    sliderMain:sliderMainReducer,
    sliderSecondary:sliderSecondaryReducer,
    banner:bannerReducer,
    testimonial:testimonialReducer

});
export default persistReducer(persistConfig,rootReducer);