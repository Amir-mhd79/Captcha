let divCaptcha = document.querySelector("div.captcha");
let refreshCaptcha = document.querySelector("i.refresh");
let signIn = document.querySelector("button.signIn");
let code = document.querySelector("input.code");
let captcha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
function generateCaptcha() {
  generate =
    captcha.charAt(Math.random() * captcha.length - 1) +
    captcha.charAt(Math.random() * captcha.length - 1) +
    captcha.charAt(Math.random() * captcha.length - 1) +
    captcha.charAt(Math.random() * captcha.length - 1) +
    captcha.charAt(Math.random() * captcha.length - 1);
  divCaptcha.innerHTML = generate;
}
generateCaptcha();
refreshCaptcha.addEventListener("click", function () {
  generateCaptcha();
});
signIn.addEventListener("click", function () {
  if (code.value === generate) {
    document.querySelector("h4.alert").classList.remove("block");
    document.querySelector("h4.alert").classList.add("hidden");
    alert("Your Login Was Successful");
  } else {
    document.querySelector("h4.alert").classList.remove("hidden");
    document.querySelector("h4.alert").classList.add("block");
    generateCaptcha();
  }
});
