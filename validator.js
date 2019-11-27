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
    alert("Not a valid card number");
  }
}

function validateVisa(cardNum) {
  alert("Type: Visa");
}

function validateDiscover(cardNum) {
  alert("Type: Discover");
}

function validateAmex(cardNum) {
  if (cardNum[0] !== "3" || (cardNum[1] !== "4" && cardNum[1] !== "7")) {
    alert("not a valid card number");
  } else {
    alert("Type: American Express");
  }
}
