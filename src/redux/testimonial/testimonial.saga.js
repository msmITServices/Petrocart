import {takeLatest,call,put,all} from 'redux-saga/effects';
import testimonialActionTypes  from './testimonialActionTypes';
import {firestore,convertTestimonialSnapshotToMap} from '../../firebase/firebase.util';
import {fetchTestimonialSuccess,fetchTestimonialFailure} from './testimonial.actions';
export function* fetchTestimonialStartAsync(){

    try{
        const collectionRef=firestore.collection('testimonials'); 
    const snapshot=yield collectionRef.get();
    const collectionsMap=yield call(convertTestimonialSnapshotToMap,snapshot);
    yield put(fetchTestimonialSuccess(collectionsMap));
    }catch(error){
        yield fetchTestimonialFailure(error.message);
    }
    
}

export function* onFetchTestimonialStart(){
    yield takeLatest(
        testimonialActionTypes.FETCH_TESTIMONIAL_START,
        fetchTestimonialStartAsync
    );
}

export function* testimonialSagas(){
    yield all([call(onFetchTestimonialStart)]);
}