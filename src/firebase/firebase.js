import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()

// const subscription = database.ref('expenses').on('value', (snapshot) => {
//   console.log(snapshot.val())
// })
// database.ref().remove().then(() => {
//   database.ref('expenses').push({
//     description: 'Firebase course',
//     amount: 1000,
//     notes: '',
//     createdAt: 101630271
//   })
//   database.ref('expenses').push({
//     description: 'Coffee',
//     amount: 200,
//     notes: 'Gotta stay awake!',
//     createdAt: 279630271
//   })
//   database.ref('expenses').push({
//     description: 'Comfortable chair',
//     amount: 6500,
//     notes: 'Boy do I need a good chair right now',
//     createdAt: 179634271
//   })
// })
