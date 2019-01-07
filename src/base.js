import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBa4Xm2MkohFGK7_tGvGYwzejxR8CiEJzg',
  authDomain: 'catch-of-the-day-pat-m.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-pat-m.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
