import * as firebase from 'firebase';
import * as expenseActions from '../actions/expenses';

const config = {
    apiKey: "AIzaSyALX-OU91xdEBqhol_2EaUV4BPgzuUB4n8",
    authDomain: "expensify-feb38.firebaseapp.com",
    databaseURL: "https://expensify-feb38.firebaseio.com",
    projectId: "expensify-feb38",
    storageBucket: "expensify-feb38.appspot.com",
    messagingSenderId: "595230419853"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
      name: 'Mauricio Jose'
  })