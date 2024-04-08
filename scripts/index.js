function validateEmail(email) {
  if (!email.includes("@")) {
    return false;
  }
  return true;
}

const form = document.querySelector("#signup");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    document.querySelector("#email-address").style.display = "none";
    document.querySelector("input").style.border = "2px solid #ff4d4d";
    document.querySelector("input").style.backgroundColor = " #ffe6e6";
    document.querySelector("#js-red-msg").innerHTML =
      "<span>Email address</span>          Valid email required";
  } else {
    let html = `<div class="msg-box">
    <img src='./assets/images/icon-list.svg' alt="icon-list" class="icon-list"/>
     <h1>Thanks for subscribing!</h1>
     <p>A confirmation email has been sent to <strong>
     ${email}</strong>
     Please open it and click the button inside to confirm your subscription.
     </p>
     <button type="submit" class="dismiss-msg">Dismiss message
     </button>
    </div>
    `;
    document.body.innerHTML = html;
  }
});
