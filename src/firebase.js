import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgOTGk7BJngVysYmMcQyiRmdAagmK_OGk",
    authDomain: "foodtogo28-ad462.firebaseapp.com",
    projectId: "foodtogo28-ad462",
    storageBucket: "foodtogo28-ad462.appspot.com",
    messagingSenderId: "432008719545",
    appId: "1:432008719545:web:d3f4f3dafb7a502ca7ff68"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db, auth}