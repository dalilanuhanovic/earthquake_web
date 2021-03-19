// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCoJ1CofHdavKbkIycOQFEL-Yr0rJ4SZC0",
    authDomain: "login-e8810.firebaseapp.com",
    databaseURL: "https://login-e8810.firebaseio.com",
    projectId: "login-e8810",
    storageBucket: "login-e8810.appspot.com",
    messagingSenderId: "720732650775",
    appId: "1:720732650775:web:721c1ea780d11217df8b52",
    measurementId: "G-PM13S5N14L"
  };

 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  function signUp(){
      var email= document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      alert("Signed up!")
  }

  function signIn(){
    var email= document.getElementById("email");
    var password = document.getElementById("password");
    auth.signInWithEmailAndPassword(email.value, password.value).then(()=>
    {window.location.replace("./fetch.html")
  .catch(()=> alert("Greška"))})

  }
  
  function signOut(){
      auth.signOut();
      alert("Signed out!")
  }

  auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
