firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      getEmail = firebaseUser.email;
      console.log(getEmail);

      auth();
    } else {
      console.log('not logged in');
      // setTimeout(doSomething, 6000);
      // function doSomething() {
      //   // alert("The password or email is incorrect");
      // }
    }
  });
function auth() {
    firebase
      .firestore()
      .collection('NGO')
      .doc(getEmail)
      .get().then(function(doc) {
          ngo_name = doc.data().name;
          ngo_email = doc.data().email;
          ngo_cnum = doc.data().cnumber;
            ngo_desc =doc.data().desc;
        ngo_upi = doc.data().upi;
          ngo_cause = doc.data().cause;
        ngo_site = doc.data().site;
          console.log(ngo_email);
          
        
            document.getElementById('name_ngo').value = ngo_name;
          document.getElementById('email_ngo').value = ngo_email;
          document.getElementById('ngo_cnum').value = ngo_cnum;
            document.getElementById('Description').value = ngo_desc;
        document.getElementById('UPI').value = ngo_upi;
        document.getElementById('Cause').value = ngo_cause;
        document.getElementById('NGO_Site').value = ngo_site;
      });
  }