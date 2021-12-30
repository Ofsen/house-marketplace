import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCKcqrjAJfvOHrAXucSaVLS9LWK3dFwXxk',
	authDomain: 'house-marketplace-app-c278c.firebaseapp.com',
	projectId: 'house-marketplace-app-c278c',
	storageBucket: 'house-marketplace-app-c278c.appspot.com',
	messagingSenderId: '785509785694',
	appId: '1:785509785694:web:67d4a38f6bbf006c6414cf',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
