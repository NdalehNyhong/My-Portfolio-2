function sendEmail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_jsrjvib", "template_aae0v3c", parms).then(alert("Your email has been sent!"))
}