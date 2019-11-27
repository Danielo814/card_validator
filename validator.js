#!/usr/bin/env Node

function cardTypeCheck() {
  var num = document.getElementById("cardNum").value;
  console.log(num.length);
  if (num.length !== 16 && num.length !== 15) {
    console.log("not a valid card number");
  } else if (num.length == 15) {
    validateAmex(num);
  } else if ((num.length == 16 || num.length == 13) && num[0] == "4") {
    validateVisa(num);
  }
}

function validateVisa(cardNum) {
  console.log("Type: Visa");
}

function validateAmex(cardNum) {
  if ((cardNum[0] !== "3" && cardNum[1] !== "4") || cardNum[1] !== "7") {
    console.log("not a valid card number");
  } else {
    console.log("Type: American Express");
  }
}
