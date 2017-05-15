      var config = {
         apiKey: "AIzaSyCpymD43UCWOJ5wgeupT13lVmo45nT75Nw",
         authDomain: "suffrage-up-9cd20.firebaseapp.com",
         databaseURL: "https://suffrage-up-9cd20.firebaseio.com",
         projectId: "suffrage-up-9cd20",
         storageBucket: "suffrage-up-9cd20.appspot.com",
         messagingSenderId: "580302035473"
        };

        firebase.initializeApp(config);
        
        var singUp = document.getElementById('sing-up');
        var singOut = document.getElementById('sing-out');

    /**
     * Function called when clicking the Login/Logout button.
     */
    // [START buttoncallback]
    function toggleSignIn() {
      if (!firebase.auth().currentUser) {
        // [START createprovider]
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {

          // The signed-in user info.
          var user = result.user;

          console.log("Hola "+user.displayName.split(" ")[0]+" ;)")

          // [END_EXCLUDE]
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;

          // [START_EXCLUDE]
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
        // [END signin]
      } else {
        // [START signout]
        firebase.auth().signOut()
        // [END signout]
      }
      // [START_EXCLUDE]
      document.getElementById('sing-up').disabled = true;
      // [END_EXCLUDE]
    }

    function singOutA(){
      firebase.auth().signOut().then(()=>{
        document.getElementById('sing-out').disabled = true;
        location.reload();
      }).catch((error)=>{
        console.log(error)
      });

           }    
    // [END buttoncallback]
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          document.getElementById('nameHead').textContent = displayName;
          document.getElementsByTagName('IMG')[0].setAttribute('src', photoURL)
          document.getElementsByTagName('IMG')[0].className += 'small img-resoponsive img-circle'
          document.getElementById('sing-out').disabled = true;

          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE]
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('sing-up').addEventListener('click', toggleSignIn, false);
      document.getElementById('sing-out').addEventListener('click', singOutA, false);

    }
    window.onload = function() {
      initApp();
    };
