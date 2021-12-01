let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let username = document.getElementById("username");
let password = document.getElementById("password");
let displayCap = document.getElementById("displayCap");

let form = document.getElementById("form");
generate = () => {
  let first = alphabets[Math.floor(Math.random() * alphabets.length)];
  let second = Math.floor(Math.random() * 10);
  let third = Math.floor(Math.random() * 10);
  let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let sixth = Math.floor(Math.random() * 10);
  captcha =
    first.toString() +
    second.toString() +
    third.toString() +
    fourth.toString() +
    fifth.toString() +
    sixth.toString();
  displayCap.innerText = captcha;
};
generate();

form.addEventListener("submit", (e) => {
  let userValue = document.getElementById("entered-captcha").value;

  //error msg
  var divTag = document.createElement("div"); // Create a <div> node
  var ptag = document.createElement("p");

  console.log(username.value);
  console.log(password.value);
  console.log(userValue.value);
  if (
    username.value === "" ||
    username.value == null ||
    password.value === "" ||
    password.value == null ||
    userValue.value === "" ||
    userValue.value == null
  ) {
    console.log("Passed first if");
    if (
      username.value !== "admin" ||
      password.value !== "admin" ||
      userValue.value !== displayCap.value
    ) {
      console.log("Second if working");
      form.appendChild(divTag).classList.add("alert alert-danger fw-bold");
      divTag.appendChild(
        (ptag.innerHTML = "Incorrect Username Or Password Or Captcha")
      );
      //e.preventDefault();
    } else {
      //redirect
      document.location = "master.html";
    }
  } else {
    form.appendChild(divTag).classList.add("alert alert-danger fw-bold");
    divTag.appendChild((ptag.innerHTML = "Fill all Fields"));
  }
});
