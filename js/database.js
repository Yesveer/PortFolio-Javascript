// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyB50zmwU0nQBiF-7-UP2aLQd__y0JosMa4",
authDomain: "portfolio-ea7fc.firebaseapp.com",
projectId: "portfolio-ea7fc",
storageBucket: "portfolio-ea7fc.appspot.com",
messagingSenderId: "867562845741",
appId: "1:867562845741:web:2bb54bb94242344d552aa4",
measurementId: "G-HD0ZHG4980"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const ref = database.ref('usersVisit')
const refer = database.ref('contactME')

const pform = document.getElementById('pForm');

pform.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('pname').value;
    const email = document.getElementById('pemail').value;

    ref.push({
        Name :name ,
        Email  :email
    })

    alert("Welcome To Kaal Bhairav Portfolio")
    window.scrollTo(0, 0);
})

const cForm = document.getElementById('cForm');

cForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const namec = document.getElementById('cname').value;
    const emailc = document.getElementById('cemail').value;
    const project = document.getElementById('cproject').value;
    const message = document.getElementById('cmessage').value;

    refer.push({
        Name: namec,
        Email: emailc,
        Project: project,
        Message: message
    })

    alert("Thankyou for Contact me. I will contact you")
    window.scrollTo(0, 0);
});

//Email Send=======================================================>
const contactForm  = document.getElementById('pForm')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_l5ziwyc', 'template_6sxi1h9', '#pForm', 'g_3CTEDP0ZYnvtMAV')
    .then(function(response) {
      console.log('Email sent successfully!', response.status, response.text);
      // Handle success, such as displaying a success message
    }, function(error) {
      console.log('Error sending email:', error);
      // Handle error, such as displaying an error message
    });
}

contactForm.addEventListener('submit', sendEmail)