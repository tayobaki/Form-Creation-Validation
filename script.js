document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  username.trim();
  email.trim();
  password.trim();

  const isValid = true;

  const messages = [
    "There is a username error",
    "This is an email error",
    "This is a password error",
  ];

  if (username.length < 3) {
    isValid = false;
    messages[0];
  }

  if (!email && "@" && ".") {
    isValid = false;
    messages[1];
  }

  if (!password.length >= 8) {
    isValid = false;
    messages[2];
  }

  feedbackDiv.style.display = "block";

  if (isValid === true) {
    feedbackDiv.textContent = "Registration Successful";
    feedbackDiv.style.color = "#28a745";
  } else {
  }
});
