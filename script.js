document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    const messages = [];

    const username = form.username.value.trim();
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    const email = form.email.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push('Email must contain "@" and "."');
    }

    // Password Validation
    const password = form.password.value.trim();
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
