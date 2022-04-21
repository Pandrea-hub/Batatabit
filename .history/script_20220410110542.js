const arrow_right = document.getElementById("arrow-right")
const arrow_left = document.getElementById("arrow-left")
const table_1 = document.getElementById("table-1")
const table_2 = document.getElementById("table-2")
arrow_right.onclick = function(){
   table_1.style.display = "none"
   table_2.style.display = "grid"
   arrow_left.style.display = "block"
}
arrow_left.onclick = function(){
    table_1.style.display = "grid"
    table_2.style.display = "none"
    arrow_right.style.display = "block"
}