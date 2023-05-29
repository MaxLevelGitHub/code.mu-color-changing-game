let colors = ["blue", "red", "green"]; 
let cells = document.getElementsByTagName("td");
let index = 0;
let clicks = 0;

    function changeColor() {
    clicks++;
    this.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; 
    checkTable(); 
    document.getElementById("clicks").innerHTML = clicks;
}

for (var i = 0; i < cells.length; i++) {
cells[i].addEventListener("click", changeColor); 
}

    function checkTable() {
    let firstColor = cells[0].style.backgroundColor; 
    for (var i = 1; i < cells.length; i++) {
    if (cells[i].style.backgroundColor != firstColor) {
    return; 
}
}
alert("Вы выиграли за " + clicks + " ходов!");
}

    function reset() {
    for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = ""; 
}
    index = 0; 
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks; 
}