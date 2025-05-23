// Get the container element
const container = document.getElementById("gridContainer");

// create 256 divs (16x16)
for(let i = 0; i < 256; i++) {
    // create a new div element
    const gridSquare = document.createElement("div")

    // Add the grid-square class
    gridSquare.className = "grid-square"


    // Add a data attribute with the position
    const row = Math.floor(i / 16) + 1
    const col = (i % 16) + 1
    gridSquare.setAttribute("data-position", `${row}-${col}`)

    // Add click event for interactivity
    gridSquare.addEventListener("Click", function () {
        this.style.backgroundColor = this.style.backgroundColor === "rgb(40, 167, 69)" ? "fff" :
         "#28a745"
    })
}