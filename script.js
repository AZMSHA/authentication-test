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
