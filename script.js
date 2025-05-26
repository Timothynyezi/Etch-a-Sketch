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
    const totalSquares = gridSize * gridSize
    gridTittle.textContent = `${gridSize}x${gridSize} Grid(${totalSquare} squares)`

    // Calculate square size to maintain 400px total width
    const containerWidth = 400
    const squareSize = containerWidth / gridSize

    // Create the specified number of squares
    for (let i = 0; i < totalSquares; i++) {
        // Create a new div element
        const gridSqaure = document.createElement("div")
         
        // Add the grid-square class
        gridSqaure.className = "grid-square"

        // Set the size of each square dynamically
        gridSqaure.style.width = `${squareSize}px`
        gridSqaure.style.height = `${squareSize}px`

        // Calculate position for data attribute
        const row = Math.floor( i / gridSize) + 1
        const col = (i % gridSize) + 1

        


    }
}



console.log("Grid created successfully ! 256 squares generated.")