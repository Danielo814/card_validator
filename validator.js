#!/usr/bin/env Node

function cardTypeCheck() {
  var num = document.getElementById("cardNum").value;
  if (num.length == 15 && num[0] == "3") {
    validateAmex(num);
  } else if ((num.length == 16 || num.length == 13) && num[0] == "4") {
    validateVisa(num);
  } else if ((num.slice(0, 4) == "6011" || num[0] == "5") && num.length == 15) {
    validateDiscover(num);
  } else {
    console.log("Not a valid card number");
  }
}

function validateVisa(cardNum) {
  console.log("Type: Visa");
}

function validateDiscover(cardNum) {
  console.log("Type: Discover");
}

function validateAmex(cardNum) {
  if (cardNum[0] !== "3" || (cardNum[1] !== "4" && cardNum[1] !== "7")) {
    console.log("not a valid card number");
  } else {
    console.log("Type: American Express");
  }
}
