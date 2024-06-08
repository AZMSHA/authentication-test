function togglePassword({ target, passwordInput }) {
  const passwordField = document.getElementById(passwordInput);
  const showIcon = target.target;

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showIcon.classList.remove("fa-eye");
    showIcon.classList.add("fa-eye-slash");
    showIcon.classList.add("active");
  } else {
    passwordField.type = "password";
    showIcon.classList.remove("fa-eye-slash");
    showIcon.classList.remove("active");
    showIcon.classList.add("fa-eye");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())), // Convert FormData to JSON
      });

      const responseData = await response.json(); // Parse JSON response

      if (!response.ok) {
        throw new Error(responseData.message); // Throw error if response is not ok
      }

      //log responnse
      console.log(responseData.user.role);
      // Handle successful response
      if (responseData.user.role === "Basic") {
        window.location.href = "/user.html";
      } else if (responseData.user.role === "admin") {
        window.location.href = `/dashboard.html?username=${responseData.user.username}`;
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error, show error message, etc.
    }
  });
});
