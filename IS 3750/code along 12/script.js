//Name: Naomi Jones
//Description: Shopping list program
function createItem() {
    document.querySelector("#shopping-form>inpit").value;
    let template = document.querySelector("template");
    let myNewItem = document.importNode(template.content, true);
    myNewItem.querySelector(".item-text").innerText = itemName;
    myNewItem.querySelector(".remove-btn").addEventListener("click", removeShoppingListItem);
    myNewItem.querySelector("1i").addEventListener("click", removeShoppingListItem);

    document.querySelector("#shopping-list").appendChild(myNewItem);
    document.querySelector("#shopping-form>input").value = "";
}

function removeShoppingListItem(e) {
    if (e.target.getAttribute("class") === "remove-btn" && e.currentTarget.getAttribute("class") != "remove-btn") {
        e.currentTarget.remove();
    }
}

document.querySelector("shopping-form>button").addEventListener("click", createItem);