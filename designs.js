
//form is submitted when the button is clicked
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    html = "";
    //upon form submission, the grid will be set to empty
    document.getElementById('pixel_canvas').innerHTML = html;
    //the makeGrid function will be called
    makeGrid(); 
});


function clickCell() {
    // all td cells will be collected into "tdx"
    const tdx = document.getElementsByTagName('td');

    // for loops goes through the collection and isolates the cells using index.
    for (var i = 0; i < tdx.length; i++) {
        tdx[i].addEventListener('click', function(e) { //when a cell is clicked, color picker will grab the value of color chosen
            let colors = $('#colorPicker').val();
            //cell will be colored depending on the color chosen
            e.target.bgColor = colors; 
        });

    }
}
//this function will make the grid
function makeGrid() {
    let column = $('#input_width').val();
    let rows = $('#input_height').val();
    let table = document.getElementById('pixel_canvas');

    for (var i = 0; i < rows; i++) {
        let row = document.createElement("tr");

        for (var h = 0; h < column; h++) {
            let cell = document.createElement("td");
            row.appendChild(cell);

        }
        table.appendChild(row);
    }

    clickCell();
};