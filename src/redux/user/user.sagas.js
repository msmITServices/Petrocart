import {takeLatest,put,all,call} from 'redux-saga/effects';
import userActionTypes from './userActionTypes';
import {auth,googleProvider,creteProfileDocument, getCurrentUser} from '../../firebase/firebase.util';
import {signInSuccess,signInFailure,signOutSuccess, signOutFailure,signUpFailure,signUpSuccess} from './user.actions';
export function* SignInWithGoogle(){
    try{
        const {user}=yield auth.signInWithPopup(googleProvider);
       yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* getSnapshotFromUserAuth(userAuth,additiionalData){
   try{
        const userRef=yield call(creteProfileDocument,userAuth,additiionalData);
        const userSnapshot=yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));

    }catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* SignInWithEmail({payload:{email,password}}){
    try{
        const {user}=yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);

    }catch(error){
       yield put(signInFailure(error.message));
    }
}

export function* isUserAuthenticated(){
    try{
        const user=yield getCurrentUser();
        if(!user) return;
        yield getSnapshotFromUserAuth(user);


    }catch(error){
        yield put(signInFailure(error.message));
    }
}

export function* signOutStart(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error.message));
    }
}

export function* signUp({payload:{password,displayName,email}}){
    try{

        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additionalData:{displayName}}));
    }catch(error){
        yield put(signUpFailure(error.message));
    }
}
export function* signInAfterSignUp({payload:{user,additiionalData}}){
    yield getSnapshotFromUserAuth(user,additiionalData)

}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_START,SignInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,SignInWithEmail);
}


export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOutStart)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}