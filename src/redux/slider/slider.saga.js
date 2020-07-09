import {takeLatest,call,put,all} from 'redux-saga/effects';
import sliderActionTypes  from './sliderActionTypes';
import {firestore,convertMainSliderSnapshotToMap,convertSecondarySliderSnapshotToMap} from '../../firebase/firebase.util';
import {fetchSliderMainFailure, fetchSliderMainSuccess,fetchSliderSecondarySuccess,fetchSliderSecondaryFailure} from './slider.actions';
export function* fetchSiderMainStartAync(){

    try{
        const collectionRef=firestore.collection('main-slider'); 
    const snapshot=yield collectionRef.get();
    const collectionsMap=yield call(convertMainSliderSnapshotToMap,snapshot);
    yield put(fetchSliderMainSuccess(collectionsMap));
    }catch(error){
        yield fetchSliderMainFailure(error.message);
    }
    
}
export function* fetchSliderSecondaryStartAync(){

    try{
        const collectionRef=firestore.collection('secondary-slider'); 
    const snapshot=yield collectionRef.get();
    const collectionsMap=yield call(convertSecondarySliderSnapshotToMap,snapshot);
    yield put(fetchSliderSecondarySuccess(collectionsMap));
    }catch(error){
        yield fetchSliderSecondaryFailure(error.message);
    }
    
}

export function* fetchSliderMainStart(){
    yield takeLatest(
        sliderActionTypes.FETCH_SLIDER_MAIN_START,
        fetchSiderMainStartAync
    );
}
export function* fetchSliderSecondaryStart(){
    yield takeLatest(
        sliderActionTypes.FETCH_SLIDER_SECONDARY_START,
        fetchSliderSecondaryStartAync
    );
}

export function* sliderSagas(){
    yield all([call(fetchSliderMainStart),call(fetchSliderSecondaryStart)]);
}