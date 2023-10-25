try {
	self.importScripts('firebase/firebase-app.js', 'firebase/firebase-database.js')
	
	// Your web app's Firebase configuration
	  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  const firebaseConfig = {
		apiKey: "AIzaSyCW1h8Xg64SzJAGtAIQ4IL_51oDPaQ1VlE",
		authDomain: "tubark-15ba4.firebaseapp.com",
		databaseURL: "https://tubark-15ba4.firebaseio.com",
		projectId: "tubark-15ba4",
		storageBucket: "tubark-15ba4.appspot.com",
		messagingSenderId: "185020413708",
		appId: "1:185020413708:web:bfe04984a20c1d0ea9bb29",
		measurementId: "G-TE32BMF6QR"
	 };
	
	 // Initialize Firebase
	 const app = initializeApp(firebaseConfig);
	 const analytics = getAnalytics(app);
	
} catch (e) {
	console.log('error: ', e);
}