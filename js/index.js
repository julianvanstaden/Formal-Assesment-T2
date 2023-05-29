let first = [];
let email = [];
let subject = [];
let password = [];

let allStudents = [first, email, subject, password];

addStudent = () => {
    let first = document.getElementById("first").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value


    if(newsletter.checked){

        allStudents.push({
            studentFirst: first,
            studentLast: last,
            studentAge: age,
            studentSubject: subject
        });



        alert("Welcome " + first + "! Thank you for your ,interest in " + subject + "! We will contact you via the email provided: " + email  + ",or alternatively on the phone number: " + number);
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + first + "!  If you want to sign up, you better CHECK that newsletter box! ");
    }
    // console.log(alert)
    // console.log(email)
    // console.log(subject)
    // console.log(password)
        console.log(allStudents)


    document.getElementById("studentForm").reset();
}

    
