function addItem(itemIndex) {
    let itemToAdd = {
        itemID: itemIndex,
        name: items[itemIndex].name,
        amount: 1
    }

    // If the inventory is full, this function will cease to exist
    if (inventory.length === inventoryLimit) {
        console.log("Inventory is full")
        return false;
    }

    // Check if item is already inside inventory
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].itemID === parseInt(itemIndex)) {
            inventory[i].amount++;
            return true;
        }
    }    

    inventory.push(itemToAdd);
}

function removeItem(inventoryIndex) {
    // Removes amount from item
    inventory[inventoryIndex].amount--;

    // If item amount is equal to 0 or lower (Shouldn't happen), it will be removed from the inventory
    if (inventory[inventoryIndex].amount <= 0) {
        inventory.splice(inventoryIndex);
    }
}
