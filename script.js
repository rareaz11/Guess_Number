let listOfSecretNumber = [Math.floor(Math.random() * 30) + 1];
let messageSelector = document.querySelector("#message");
const listOfSecretInputs = document.querySelector(".hidden-numbers");
let inputs = listOfSecretInputs.querySelectorAll("input");
let numberOfTry = document.querySelector(".numberOfTry");
const modal = document.getElementById("gameModal");
const closeModal = document.querySelector(".restart-modal");
const modalWin = document.getElementById("gameModalWin");
const closeModalWin = document.querySelector(".restart-modalWin");
const restartoption = document.querySelector(".restart");
const loadingModal = document.getElementById("loadingModal");

restartoption.addEventListener("click", () => {
  loadingModal.classList.add("active");

  setTimeout(() => {
    location.reload();
  }, 2000);
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("active");
  loadingModal.classList.add("active");

  setTimeout(() => {
    location.reload();
  }, 2000);
});

closeModalWin.addEventListener("click", function () {
  modalWin.classList.remove("active");
  loadingModal.classList.add("active");

  setTimeout(() => {
    location.reload();
  }, 2000);
});

console.log(listOfSecretNumber);
//console.log(listOfSecretNumber.length);
while (listOfSecretNumber.length < 3) {
  let numForLoop = Math.floor(Math.random() * 30) + 1;

  if (listOfSecretNumber.includes(numForLoop)) {
  } else {
    listOfSecretNumber.push(numForLoop);
  }
}
let counter = 5;
//console.log(listOfSecretNumber);

function checkNumber() {
  //modalWin.classList.add("active");
  let number = document.querySelector(".yourChoise").value;
  if (number !== "" && parseInt(number) >= 1 && parseInt(number) <= 30) {
    if (counter < 1) {
      // console.log("gotovo");
      modal.classList.add("active");
    } else {
      counter--;
      console.log(counter);
      numberOfTry.innerHTML = counter;
    }

    //console.log(number);
    if (listOfSecretNumber.includes(parseInt(number))) {
      //console.log("tu sam");
      if (inputs[0].value === "?") {
        inputs[0].value = number;
        messageSelector.innerHTML = "Pogodak";
        messageSelector.style.color = "black";
        checkTryInStatements(counter);
      } else if (inputs[0].value !== number && inputs[1].value === "?") {
        messageSelector.innerHTML = "Pogodak";
        messageSelector.style.color = "black";
        inputs[1].value = number;
        checkTryInStatements(counter);
      } else if (
        parseInt(inputs[0].value) !== parseInt(number) &&
        parseInt(inputs[1].value) !== parseInt(number) &&
        inputs[2].value === "?"
      ) {
        inputs[2].value = number;
        modalWin.classList.add("active");
      } else {
        messageSelector.innerHTML = "Ne mogu se koristiti 2 ista broja";
        messageSelector.style.color = "red";
        checkTryInStatements(counter);
      }
    } else {
      messageSelector.innerHTML = "Dobar pokusaj, ali nazalost nije pogodak";
      checkTryInStatements(counter);
    }
  } else if (parseInt(number) < 1 || parseInt(number) > 30) {
    // console.log("veci je");
    messageSelector.innerHTML = "Izaberite broj izmedu 1 i 30";
    messageSelector.style.color = "red";
  } else {
    messageSelector.innerHTML = "U polje treba biti unesen broj";
  }
}

function checkTryInStatements(count) {
  if (count == 1) {
    modal.classList.add("active");
  }
}
