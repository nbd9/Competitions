// Problem #9
// (c) 2018 - Nick DeGroot

// RISTET  - 210 pts.
// Mathus and Jonathan are playing a game called Ristet.In Ristet, players attempt to form a
// complete horizontal or vertical line on a square grid of unit cells.Players take turns shading a
// square with side length less than or equal to a predetermined number anywhere onto the grid,
// as long as at least one cell becomes shaded: the shaded square can contain cells that are
// already shaded.It is Jonathan’s turn and he would like to know the smallest size square needed
// to win in one move

const fs = require('fs');

fs.readFile('./JudgeCases/ristet.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()
    
    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        gameInfo = input.shift().split(" ")
        gridLength = gameInfo[0]
        maxSquare = gameInfo[1]

        // Generating board
        board = []
        for (n = 0; n < gridLength; n++) {
            board.push(input.shift().split(""))
        }
        // console.log(board)

        // Finding smallest play
        smallestSquare = Infinity
        for (row = 0; row < gridLength; row++) {
            // Across Rows
            square = board[row].lastIndexOf(" ") - board[row].indexOf(" ") + 1
            if (smallestSquare > square) {
                smallestSquare = square
            }

            // Down Columns
            column = []
            for (col = 0; col < gridLength; col++) {
                column.push(board[col][row])
            }

            square = column.lastIndexOf(" ") - column.indexOf(" ") + 1
            if (smallestSquare > square) {
                smallestSquare = square
            }
        }

        if (smallestSquare > maxSquare) {
            console.log("Impossible")
        } else {
            console.log(smallestSquare)
        }
    }
})