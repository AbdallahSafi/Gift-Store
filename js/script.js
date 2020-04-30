"use strict;";

var cart = 0;

function addToCart() {
  cart = cart + 1;
  var items = document.getElementById("cartItems");
  items.innerHTML = cart;
  items.style.display = "inline";
}

var name = prompt("Enter Your Name");
var color = prompt("Color Your Name");

var nameElement = document.getElementById("name");
var welcom = document.getElementById("welcom");
welcom.style.display = "block";
nameElement.innerHTML = name;
nameElement.style.color = color;

function clearCart() {
  if (cart !== 0) {
    var decision = confirm("Do you want to purchase these Items ?");
    if (decision === true) {
      alert("We will deliver this items to your location. have a nice day");
      cart = 0;
      var items = document.getElementById("cartItems");
      items.innerHTML = cart;
    } else {
      alert("You can continoue shopping");
    }
  } else {
    alert("You did not select any item yet !");
  }
}
