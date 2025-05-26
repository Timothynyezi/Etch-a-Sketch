// Get the container element
const container = document.getElementById("gridContainer");
const gridTittle = document.getElementById("gridTittle")
const newGridBtn = document.getElementById("newGridBtn")


// Default grid size
let currentGridSize = 16

// Function to create a grid with specified size
function createGrid(gridSize) {
    // clear existing
    container.innerHTML = ""

    // Update the title
    const totalSquare = gridSize * gridSize
    gridTittle.textContent = `${gridSize}x${gridSize} Grid(${totalSquare} squares)`

    // Calculate square size to maintain 400px total width
}
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

    // Add an event listener for the trail effect
    gridSquare.addEventListener("mouseenter", function (){
        // When mouse enters the square, add the hovered class
        this.classList.add("hoverd")
    })
    // Add click event for interactivity
    gridSquare.addEventListener("Click", function () {
        // Toggle between green and white when clicked
        if(this.style.backgroundColor === "rgb(40, 167, 69)") {
            this.style.backgroundColor = "#fff"
            this.classList.remove("hovered")
        } else {
            this.style.backgroundColor = "#28a745"
            this.style.classList.remove("hovered")
        }
    })

    // Append the div to the container
    container.appendChild(gridSquare)
}

console.log("Grid created successfully ! 256 squares generated.")