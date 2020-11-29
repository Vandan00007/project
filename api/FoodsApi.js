//import firebase from 'react-native-firebase';
//import firebase from 'firebase';
import firestore from 'firebase/firestore'
//import firebaseConfig from '../config'


/*
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAz9u65ZX2F5Tr1gCfKHHf-vce0gSgfyC8",
    authDomain: "complaint-70e3e.firebaseapp.com",
    databaseURL: "https://complaint-70e3e.firebaseio.com",
    projectId: "complaint-70e3e",
    storageBucket: "complaint-70e3e.appspot.com",
    messagingSenderId: "493586310101",
    appId: "1:493586310101:web:eb16044882a51a764cd35c"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export function addFood(food, addComplete){
        db.collection("Foods")
            .add({
            name:  food.name,
            color: food.color,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then((snapshot) => snapshot.get())
        .then((foodData) => addComplete(foodData.data()))
        .catch((error) => console.log(error));

}

export async function getFoods(foodsRetrieved){
    let foodList = [];
    let snapshot =  await firebase.firestore()
        .collection('Foods')
        .orderBy('createdAt')
        .get();
    snapshot.forEach((doc) => {
        foodList.push(doc.data())
    });
    foodsRetrieved(foodList);
}


*/
