import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAzOvtWzSG4Vx80JYb1M2qjfVfHQDrNs8M",
    authDomain: "devcourses-46981.firebaseapp.com",
    projectId: "devcourses-46981",
    storageBucket: "devcourses-46981.appspot.com",
    messagingSenderId: "3168848436",
    appId: "1:3168848436:web:ebad96b547f4229a709861"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;


