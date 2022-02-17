function sendEmail(){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "nicholasrader2018@gmail.com",
      Password : "rrqkegyxdlzedysn",
      To : 'nicholasrader2018@gmail.com',
      From : document.getElementById("emailSender").value,
      Subject : document.getElementById("emailSubject").value,
      Body : "Name: " + document.getElementById("emailSenderName").value
          + "<br> Email: " + document.getElementById("emailSender").value
          + "<br> Subject: " + document.getElementById("emailSubject").value
          + "<br> Message: " + document.getElementById("emailText").value
  }).then(
  document.getElementById("form-submit").value = "Message Sent!",
  document.getElementById("form-submit").style.background = "#18A558",
  );
}

function changeButton(){
    document.getElementById("form-submit").value = "Send Message";
    document.getElementById("form-submit").style.background = null;
}
