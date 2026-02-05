let listOfSecretNumber = [Math.floor(Math.random() * 30) + 1];
let messageSelector = document.querySelector("#message");
const listOfSecretInputs = document.querySelector(".hidden-numbers");
let inputs = listOfSecretInputs.querySelectorAll("input");

console.log(listOfSecretNumber);
//console.log(listOfSecretNumber.length);
while (listOfSecretNumber.length < 3) {
  let numForLoop = Math.floor(Math.random() * 30) + 1;

  if (listOfSecretNumber.includes(numForLoop)) {
  } else {
    listOfSecretNumber.push(numForLoop);
  }
}

//console.log(listOfSecretNumber);

function checkNumber() {
  let number = document.querySelector(".yourChoise").value;

  if (parseInt(number) < 1 || parseInt(number) > 30) {
    // console.log("veci je");
    messageSelector.innerHTML = "Izaberite broj izmedu 1 i 30";
    messageSelector.style.color = "red";
  }
  //console.log(number);
  if (listOfSecretNumber.includes(parseInt(number))) {
    console.log("tu sam");
    if (inputs[0].value === "?") {
      inputs[0].value = number;
      messageSelector.innerHTML = "Pogodak";
      messageSelector.style.color = "black";
    } else if (inputs[0].value !== number && inputs[1].value === "?") {
      messageSelector.innerHTML = "Pogodak";
      messageSelector.style.color = "black";
      inputs[1].value = number;
    } else if (
      parseInt(inputs[0].value) !== parseInt(number) &&
      parseInt(inputs[1].value) !== parseInt(number) &&
      inputs[2].value === "?"
    ) {
      inputs[2].value = number;
      messageSelector.innerHTML = "CESTITAMO!  POBJEDILI STE!";
      messageSelector.style.color = "green";
    } else {
      messageSelector.innerHTML = "Ne mogu se koristiti 2 ista broja";
      messageSelector.style.color = "red";
    }
  }
}
