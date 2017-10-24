$('#btn1').click(function() {
    let html = "";
    document.getElementById('pixel_canvas').innerHTML = html;
    makeGrid();
    return false;
});


function clickCell() {
    const tdx = document.getElementsByTagName('td');

    for (var i = 0; i < tdx.length; i++) {
        tdx[i].addEventListener('click', function(e) {
            let colors = $('#colorPicker').val();
            e.target.bgColor = colors;
        });

    }
}

function makeGrid() {
    let c = $('#input_height').val() - 1;
    let r = $('#input_width').val() - 1;
    let table = document.getElementById('pixel_canvas');

    for (var i = 0; i <= r; i++) {
        let row = document.createElement("tr");

        for (var h = 0; h <= c; h++) {
            let cell = document.createElement("td");
            row.appendChild(cell);

        }
        table.appendChild(row);
    }

    clickCell();
    return false;

};