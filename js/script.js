"use strict;";

welcome();

/* 
This function  will be excuted when the user choses an item to buy. 
The function will be invoke onClick event related to 'add to cart' button
Tt will add the number of items that the user entered and delet them from product items 
 */
var cart = 0;

function addToCart(id) {
  //Get number of items for a specfice gift that we have on the shop
  var giftItems = Number(document.getElementById(id).innerHTML);
  if (giftItems == 0) {
    alert("There is no items left");
    return;
  }
  //Get the number of items that the user want to buy
  var itemsNum = Number(prompt("How many Items do you want to buy?"));
  while (itemsNum <= 0 || itemsNum > giftItems) {
    itemsNum = Number(
      prompt(
        "Make sure to Enter a valid number \n How many Items do you want to buy?"
      )
    );
  }

  //add to cart
  cart = cart + itemsNum;
  var items = document.getElementById("cartItems");
  items.innerHTML = cart;
  items.style.display = "inline";

  //delete from products
  document.getElementById(id).innerHTML = giftItems - itemsNum;
}

/* This function will run when the document opened and it askes the user 
to input a name and a color. then it will the name appear in the top right corner with the color that user typed */

function welcome() {
  var name = prompt("Enter Your Name", "Guest");
  var color = prompt("Color Your Name", "red");

  var nameElement = document.getElementById("name");
  var welcom = document.getElementById("welcom");

  if (name !== "") {
    welcom.style.display = "block";
  }
  nameElement.innerHTML = name;
  nameElement.style.color = color;
}

/* 
This function  will be excuted when the user try to purchase all the items in the cart. 
The function will be invoke onClick event related to 'cart' button.
It will rise a confirmation message and the result will be an alert meassage.
based on the decsion that user takes different messages will appear.
 */

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

function addItems() {
  var giftName = prompt("Please type a name for this Gift", "Gift Name");
  var giftPrice = prompt("Please type a price for this Gift", "40");
  var giftImage = prompt(
    "Please provide an Image URL for this Gift",
    "https://www.rd.com/wp-content/uploads/2016/10/01-gag-gifts-send-wrong-message-80459669-chaiyon021.jpg"
  );
  var giftNumber = prompt("Please type how many items inside this gift", "7");
  var reapeatingCount = prompt("How many times do you want to reapeat this Gift","3");

  for (var i = 1; i <= reapeatingCount; i++) {
    var productId = 3 + i;

    //Creating Gift
    //1- Gift name
    var cgiftName = document.createElement("h3");
    var h3 = document.createTextNode(giftName + " ");
    cgiftName.appendChild(h3);
    //2- How many number of items it has
    var cgiftNumber = document.createElement("span");
    var span = document.createTextNode(giftNumber);
    cgiftNumber.appendChild(span);
    cgiftNumber.setAttribute("id", "product" + productId);
    cgiftName.appendChild(cgiftNumber);
    //3- Gift price
    var cgiftPrice = document.createElement("p");
    var p = document.createTextNode("$" + giftPrice + " " + "USD");
    cgiftPrice.appendChild(p);
    //4- Gift Image
    var cgiftImage = document.createElement("img");
    cgiftImage.setAttribute("src", giftImage);
    cgiftImage.setAttribute("class", "Product-img");

    //Gift buy button
    var buyButton = document.createElement("input");
    buyButton.setAttribute("class", "Product-button");
    buyButton.setAttribute("id", "myBtn");
    buyButton.setAttribute("type", "button");
    buyButton.setAttribute("name", "Add to cart");
    buyButton.setAttribute("value", "Add to cart");
    // buyButton.setAttribute("onclick", addToCart("product2"));

    // buyButton.addEventListener("click", addToCart("product2"));
    // buyButton.attachEvent('OnClick',Hi());

    // var buyButton = document.createElement("button");
    // buyButton.setAttribute("class", "Product-button");
    // buyButton.setAttribute("id", "myBtn");
    // var b = document.createTextNode("Add to cart");
    // buyButton.appendChild(b);
    // buyButton.attachEvent('OnClick',addToCart(productId));

    //Put the gift item on the list
    var ul = document.getElementById("gift-list");
    var li = document.createElement("li");
    li.appendChild(cgiftImage);
    li.appendChild(cgiftName);
    li.appendChild(cgiftPrice);
    li.appendChild(buyButton);
    ul.appendChild(li);
  }
}
