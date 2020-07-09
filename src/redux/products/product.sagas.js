import {takeLatest,call,put,all} from 'redux-saga/effects';
import productActionTypes  from './productActionTypes';
import {firestore,convertProductSnapshoToMap} from '../../firebase/firebase.util';
import {fetchProductsSuccesss,fetchProductsFailure} from './product.actions';
export function* fetchProductsStartAsync(){

    try{
        const collectionRef=firestore.collection('products-main'); 
    const snapshot=yield collectionRef.get();
    const collectionsMap=yield call(convertProductSnapshoToMap,snapshot);
    yield put(fetchProductsSuccesss(collectionsMap));
    }catch(error){
        yield fetchProductsFailure(error.message);
    }
    
}

export function* onFetchProductsStart(){
    yield takeLatest(
        productActionTypes.FETCH_PRODUCT_START,
        fetchProductsStartAsync
    );
}

export function* productsSagas(){
    yield all([call(onFetchProductsStart)]);
}