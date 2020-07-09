import {takeLatest,call,put,all} from 'redux-saga/effects';
import bannerActionTypes  from './bannerActionTypes';
import {firestore,convertBannerSnapshoToMap} from '../../firebase/firebase.util';
import {fetchBannerFailure,fetchBannerSuccesss} from './banner.actions';
export function* fetchBannerStartAsync(){

    try{
        const collectionRef=firestore.collection('main-banner'); 
    const snapshot=yield collectionRef.get();
    const collectionsMap=yield call(convertBannerSnapshoToMap,snapshot);
    yield put(fetchBannerSuccesss(collectionsMap));
    }catch(error){
        yield fetchBannerFailure(error.message);
    }
    
}

export function* onFetchBannerStart(){
    yield takeLatest(
        bannerActionTypes.FETCH_BANNER_START,
        fetchBannerStartAsync
    );
}

export function* bannerSagas(){
    yield all([call(onFetchBannerStart)]);
}