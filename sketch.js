const GRID = document.getElementById("grid");

function createRow(grid){
    const row = document.createElement("div");
    row.id = "row";
    grid.appendChild(row);
    return row;
}

function createCell(row){
    const cell = document.createElement("div");
    cell.id = "cell";
    row.appendChild(cell);
    cell.addEventListener("mouseenter", function() {
        cell.style.backgroundColor = "purple";
    });
}

// takes number of cells in a row of the grid and adds grid_size^2 to the grid
function populateGrid(grid_size){
    for (let i = 0; i < grid_size; i++) {
        let row = createRow(GRID);
        for (let i = 0; i < grid_size; i++) {
            createCell(row);
        }
    }
}

function newGrid() {
    GRID.innerHTML = '';
    let grid_size = document.getElementById("grid-size").value //gets the oninput value
    populateGrid(grid_size);
}


newGrid();
document.getElementById("grid-size").oninput = function() {
    newGrid();
};