  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
        apiKey: "AIzaSyDZMYtXI0BJJ2Xpb5fnbGpqq6iIA23CI6I",
        authDomain: "varghesebakery.firebaseapp.com",
        projectId: "varghesebakery",
        storageBucket: "varghesebakery.appspot.com",
        messagingSenderId: "935622940174",
        appId: "1:935622940174:web:c65c3717a552fa39d3ce5f",
        measurementId: "G-Y5Z0P8XHXQ"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      const auth =  firebase.auth();


            //  Signin functionality not yet provided !!!
        //signIN function
        function  signIn(){
        var email = document.getElementById("email");
        var password  = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value,password.value);
        promise.catch(e=>window.alert(e.message));


      }

        //signup function
        function signUp(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
        //
        promise.catch(e=>alert(e.message));
        alert("SignUp Successfully");
      }


        //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }



       //active user to homepage
        firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          var email = user.email;
          alert("Active user "+email);
    
        }else{
          alert("No Active user Found")
        }
      })
