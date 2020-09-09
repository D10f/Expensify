import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCZUU2dziWi7E3Po3-iY0yKrD9fc54PyUc",
  authDomain: "expensify-c2194.firebaseapp.com",
  databaseURL: "https://expensify-c2194.firebaseio.com",
  projectId: "expensify-c2194",
  storageBucket: "expensify-c2194.appspot.com",
  messagingSenderId: "902574996266",
  appId: "1:902574996266:web:4a1b0ed097ef83f773bc53"
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
