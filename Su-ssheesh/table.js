function occupyTable() {
    var tableNumber = document.getElementById("table-number").value;
    var table = document.getElementById("table" + tableNumber);
    if (table) {
        if (table.classList.contains("occupied")) {
            alert("This table is already occupied!");
        } else {
            table.classList.add("occupied");
            alert("Table " + tableNumber + " is now occupied!");
        }
    } else {
        alert("Invalid table number!");
    }
}
