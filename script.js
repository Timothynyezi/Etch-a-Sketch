// Get the container element
const container = document.getElementById("gridContainer");

// create 256 divs (16x16)
for(let i = 0; i < 256; i++) {
    // create a new div element
    const gridSquare = document.createElement("div")

    // Add the grid-square class
    gridSquare.className = "grid-square"
}