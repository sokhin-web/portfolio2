const text = document.querySelector(".headText");

const writeText = () => {
  setTimeout(() => {
    text.textContent = "Web-Developer";
    text.style.color = "#fd8b51";
  }, 0);
  setTimeout(() => {
    text.textContent = "Front-End";
    text.style.color = "#f2e5bf";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Back-End ";
    text.style.color = "#f2e5bf";
  }, 8000);
};

writeText();
setInterval(writeText, 12000);

//send email
function emailSend() {
  var userName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var messageBody =
    "Name " + userName + "<br/> Phone " + phone + "<br/> Email " + email;
  smtpjs
    .send({
      Host: "smtp.elasticemail.com",
      Username: "host@gmail.com",
      Password: "Password",
      To: "sokhinsing04@gmail.com",
      From: email,
      Subject: "This is the subject",
      Body: messageBody,
    })
    .then((message) => {
      if (message == "OK") {
        swal("Secussful", "You clicked the button!", "success");
      } else {
        swal("Error", "You clicked the button!", "error");
      }
    });
}
