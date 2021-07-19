var elementList = [
    ["Hydrogen", "Helium", "Lithium", "Berilium"],
    ["Boron", "Carbon", "Nitrogen", "Oxygen"]
]

function createTable() {
    var body = document.getElementById("tableDiv");
    k=1;
    while (k<3) {
        createFuck();
        body.appendChild(row);
        k+=1;
    }
}

function createFuck() {
    var row = document.createElement('tr');
    i=1;
    while (i<6) {
        var lan = document.createElement('td');
        lan.innerHTML = "Um.. ";
        row.appendChild(lan);
        i+=1;
    }
}