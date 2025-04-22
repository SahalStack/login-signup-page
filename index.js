const container = document.querySelector(".container");
const LoginLink = document.querySelector(".SignInLink");
const RegisterLink = document.querySelector(".SignupLink");

RegisterLink.addEventListener("click", () => {
  container.classList.add("active");
  validatePassword();
});

function validatePassword(password) {
  const username = document.querySelector(".username");
  const Password = document.querySelector(".password");
  console.log(Password);
  if (Password.length >= 8) {
    alert("Login Successfully.");
    return true;
  } else {
    // alert("Password must be at least 8 characters long");
    return false;
  }
}
