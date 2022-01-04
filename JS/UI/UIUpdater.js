let maxWidth = $("#health").width();

function updateHealth() {
    let currentHealth = percentage(health, maxHealth);
    console.log(maxWidth)
    console.log(currentHealth);

    $("#health").width(maxWidth * currentHealth / 100)
    console.log("Updating Health")
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } 