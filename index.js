const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const success = urlParams.get("success");

const h1 = document.getElementsByTagName("h1")[0];
const pr = document.getElementsByTagName("p")[0];

let message = "";
let sub = "";

if (success != null) {
  if (success === true || success === "true") {
    message = "Successful Transaction!";
    sub = "You can now enjoy the full features of your package.";
  } else {
    message = "Payment Rejected!";
    sub =
      "Your payment has been denied by your bank, please make sure to enter the correct data of a valid credit card.";
  }
} else {
  message = "Sorry, no data available!";
  sub = "";
}

h1.textContent = message;
pr.textContent = sub;

const btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
  history.go(parseInt(`-${history.length - 1}`));
};
