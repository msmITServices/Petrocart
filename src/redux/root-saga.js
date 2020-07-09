import {all,call} from 'redux-saga/effects';
import {sliderSagas} from './slider/slider.saga';
import {bannerSagas} from './banner/banner.sagas';
import {productsSagas} from './products/product.sagas';
import {testimonialSagas} from './testimonial/testimonial.saga';

export default function* rootSaga(){
    yield all([call(sliderSagas),call(bannerSagas),call(productsSagas),call(testimonialSagas)]);
}