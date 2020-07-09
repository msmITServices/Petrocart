import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzUcdAfQJLMSxT2p_UWRdFbxORwcczHA4",
    authDomain: "petrocart-92031.firebaseapp.com",
    databaseURL: "https://petrocart-92031.firebaseio.com",
    projectId: "petrocart-92031",
    storageBucket: "petrocart-92031.appspot.com",
    messagingSenderId: "152890043271",
    appId: "1:152890043271:web:4813c8f24d69ecfb214122",
    measurementId: "G-RPYHCVXT37"
  };


export const creteProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapshot=await userRef.get();
    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const createdAt =new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
//    console.log(snapshot);
}

export const addCollectionAndDocuments=(collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
        const newDocRef=collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    batch.commit();

}

export const deleteAllDocuments=(collectionKey,objectsToDelete)=>{
        var db = firebase.firestore();
    db.collection(collectionKey).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            db.collection(collectionKey).doc(doc.id).delete();
        });
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

export const convertMainSliderSnapshotToMap=(collections)=>{
    const transFormedCollection=collections.docs.map(doc=>{
        const {title,image,subtitle,url}=doc.data();
        return {
            id:doc.id,
            title,
            subtitle,
            url,
            image
        }
    // create object like hats:hatsCollection     
    
    });
    return transFormedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}
export const convertSecondarySliderSnapshotToMap=(collections)=>{
    const transFormedCollection=collections.docs.map(doc=>{
        const {title,image,subtitle,link}=doc.data();
        return {
            id:doc.id,
            title,
            subtitle,
            link,
            image
        }
    // create object like hats:hatsCollection     
    
    });
    return transFormedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}

export const convertBannerSnapshoToMap=(collections)=>{
    const transFormedCollection=collections.docs.map(doc=>{
        const {title,image,subtitle,link,price}=doc.data();
        return {
            id:doc.id,
            price,
            title,
            subtitle,
            link,
            image
        }
    // create object like hats:hatsCollection     
    
    });
    return transFormedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}


export const convertProductSnapshoToMap=(collections)=>{
    const transFormedCollection=collections.docs.map(doc=>{
        const {price,name,rating,discount,isNew,tag,category,stock,image,shortDescription,fullDescription}=doc.data();
        return {
            routeName:encodeURI(name.toLowerCase()),
            id:doc.id,
            price,
            name,
            rating,
            discount,
            isNew,
            tag,
            category,
            stock,
            image,
            shortDescription,
            fullDescription
        }
    // create object like hats:hatsCollection     
    
    });
    return transFormedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.name.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}


export const convertTestimonialSnapshotToMap=(collections)=>{
    const transFormedCollection=collections.docs.map(doc=>{
        const {content,customerName,image,title}=doc.data();
        return {
            id:doc.id,
            content,
            customerName,
            image,
            title
        }
    // create object like hats:hatsCollection     
    
    });
    return transFormedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.customerName.toLocaleLowerCase()]=collection;
        return accumulator;
    },{})
}





export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
        const unSubscribe=auth.onAuthStateChanged(userAuth=>{
            unSubscribe();
            resolve(userAuth);
        },reject)
    })
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
export const googleProvider=new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(googleProvider);
export default firebase;