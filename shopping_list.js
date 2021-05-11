var NameItem = document.getElementById("name-item");
var quantity = document.getElementById("quantity-item");
var print = document.querySelector(".status");
var list = document.querySelector(".shopping-list");
var ListItems = document.querySelector(".shopping-list-items");
var form = document.querySelector(".form-control");

form.addEventListener("submit", addItems);
// Add items
function addItems(e) {
  e.preventDefault();
  var name = NameItem.value;
  var qu = quantity.value;

  if (name !== "") {
    list.style.visibility = "visible";
    ListItems.innerHTML += `
            <li>
                <h5>Item name: ${name} &nbsp &nbsp &nbsp &nbsp Quantity: ${qu}</h5> <br>
  

                <div class="btn-container">
                    <button class="btn" id ="del" >delete</button>&nbsp &nbsp
                    <button class="btn" id ="purchase" >purchase</button> &nbsp &nbsp
                    <button class="btn" id ="cancel" >cancel</button>
                </div>
            </li>`;

    PrintMassege(" item is succesfully added", "green");
    Restart();
  } else if (name === "") {
    PrintMassege("Please enter a value", "red");
  }
}

// Print
function PrintMassege(text, action) {
  print.style.visibility = "visible";
  print.textContent = text;
  print.classList.add(`status-${action}`);

  setTimeout(function () {
    print.textContent = "";
    print.classList.remove(`status-${action}`);
  }, 1200);
}

// delete item
function deleteItem(e) {
  if (e.target.id === "del") {
    e.target.parentElement.parentElement.remove();
    PrintMassege(" item is succesfully removed", "red");
  }
}
// cancel item
function CancelItem(e) {
  if (e.target.id === "cancel") {
    e.target.parentElement.parentElement.style.textDecoration = "line-through";
    e.target.parentElement.parentElement.style.textDecorationColor = "red";
    PrintMassege("The item has been canceled !", "red");
  }
}
// purchase item
function purchaseItem(e) {
  if (e.target.id === "purchase") {
    e.target.parentElement.parentElement.style.textDecoration = "none";
    PrintMassege("You purchase this item!", "green");
  }
}
//ADD NEW LIST
function Add_newlist() {
  PrintMassege("TYPE TO ADD ITEMS", "red");

  list.style.visibility = "visible";
  ListItems.innerHTML =
    "---------------------------- NEW LIST----------------------------";
}
function Restart() {
  NameItem.value = "";
  quantity.value = "1";
}

ListItems.addEventListener("click", deleteItem);
ListItems.addEventListener("click", CancelItem);
ListItems.addEventListener("click", purchaseItem);
