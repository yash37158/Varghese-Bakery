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


// Refrerence message collections
var messagesRef = firebase.database().ref('user_message');

//Listen from submit :
document.getElementById('contactform').addEventListener('submit',
submitform);

// submit Form
function submitform(e){
    e.preventDefault();

    // get values
    var name = getInputVal('user_name');
    var email = getInputVal('user_email');
    var message = getInputVal('user_message');
    
    // save your message
    saveMessage(name, email, message);
    
    //show alert
    document.querySelector('.alert').style.display = 'block';

    //set Timeout for alert hide after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);

    // Reset contact form
    document.getElementById('contactform').reset();
}

// function for getInputVal
function getInputVal(id){

    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(user_name, user_email, user_message){
    var newmessageRef = messagesRef.push();
    newmessageRef.set({
        name: user_name,
        email: user_email,
        message: user_message

    });
}