// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCVxv1DLPUcpFg9y7RiWObziWUMKLS-mNM",
    authDomain: "fitlog-fc6be.firebaseapp.com",
    databaseURL: "https://fitlog-fc6be.firebaseio.com",
    projectId: "fitlog-fc6be",
    storageBucket: "fitlog-fc6be.appspot.com",
    messagingSenderId: "790391176187",
    appId: "1:790391176187:web:ed202443d229702212695e"
};


firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var auth = firebase.auth();

auth.signInWithEmailAndPassword("milos.s.pfc@gmail.com", "Test.1234!!").then((user) => {
    console.log('signed in!', user.additionalUserInfo.username)

    // db.collection("elections").get().then(users => {
    //     users.forEach((doc) => {
    //         db.collection("elections").doc(doc.id).collection("stakeholders").get().then(stake => { stake.forEach(sta => { console.log('and the stakeholder: ', sta.data()) }); }).catch(err => console.error("messed up sub", err));
    //         console.log(`${doc.id} =>`, doc.data());
    //     });
    // });

    db.collection("elections").doc("jM95Y7aZAkG6b92kE75s").update({
        name_2: "owned!"
    }).then((doc) => {
        console.log('we did it!', doc);
    }).catch((ohno) => {
        console.error("oh noes", ohno);
    });

}).catch(err => console.error("Failed to sign in", err));
