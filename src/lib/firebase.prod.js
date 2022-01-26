import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyCNvevG6XZWN_ztco-IIvK9K7FIo9-rij8',
  authDomain: 'netflix-e8739.firebaseapp.com',
  projectId: 'netflix-e8739',
  storageBucket: 'netflix-e8739.appspot.com',
  messagingSenderId: '405974133636',
  appId: '1:405974133636:web:d1b6bb3b481e8e54f38bd1',
};

const firebase = Firebase.initializeApp(firebaseConfig);
// seedDatabase(firebase);

export { firebase };
