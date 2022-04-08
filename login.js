const userpassword = document.getElementById("userPassword");
const showpassword = document.getElementById("showPassword");

function displayPassword() {
  if (showpassword.textContent == "Show") {
    showpassword.textContent = "Hide";
    userpassword.type = "text";
  } else {
    showpassword.textContent = "Show";
    userpassword.type = "password";
  }
}
showpassword.addEventListener("click", displayPassword);
