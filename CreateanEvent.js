var Events = document.getElementById("Event");
var Addr = document.getElementById("Add");
var HostN = document.getElementById("Host");
var EmailId = document.getElementById("Email");
var Da = document.getElementById("date");
var Ph = document.getElementById("Phone");
var De = document.getElementById("Desc");
var sub = document.getElementById("Sub");
var ngo_name, ngo_cnum, ngo_email;

sub.addEventListener('click',addEvent);

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
          
          console.log(ngo_email);
          document.getElementById('name_ngo').value = ngo_name;
          document.getElementById('email_ngo').value = ngo_email;
          document.getElementById('ngo_cnum').value = ngo_cnum;
      });
  }

function addEvent() {
    console.log("andar");
    firebase.firestore().collection("Events").doc().set({
        name : Events.value,
        addr : Addr.value,
        Hostn : HostN.value,
        HostEmail: EmailId.value,
        Date: Da.value,
        Phone: Ph.value,
        funds: "0",
        interested: "0",
        volunteer: "0",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        status: "pending",
        ngoName: ngo_name,
        ngoEmail: ngo_email,
        ngoCnum: ngo_cnum,
    })
}