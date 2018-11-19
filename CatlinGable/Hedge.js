// Problem #6
// (c) 2018 - Nick DeGroot

// HEDGE MAZE - 180 pts. 
// Meow the Cat(aka Chairman Meow) is playing with a ball of red yarn.Unfortunately, she bats
// the yarn a little too hard, sending it flying over a conveniently placed hedge maze!
// She is currently on the ground on the North side of the maze and would like to reach the other
// side of the maze, but she gets lost easily.Luckily, since she is a cat, she can jump onto the
// hedges in a straight line path from the North side to the South side of the maze.However, since
// she is a cat, she is lazy and does not like jumping onto and down from hedges.Please help
// Meow determine the minimum number times she must jump on a hedge to get to the other side.
// Note that if Meow is currently on a hedge, she does not need to jump a square with a hedge
// that is one square to the South of her location.

const fs = require('fs');

fs.readFile('./JudgeCases/hedgemaze.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        mazeSize = input.shift()
        maze = []

        for (n = 0; n < mazeSize; n++) {
            // Turn maze into 2D-Array
            maze.push(input.shift().split(''))
        }
        // console.log(maze)

        // Calculate least number of jumps
        leastJumps = Infinity
        for (col = 0; col < mazeSize; col++) {
            isOnBush = false
            jumps = 0

            for (row = 0; row < mazeSize; row++) {
                mazePiece = maze[row][col]
                if (mazePiece == 'X') {
                    if (!isOnBush) { jumps++ }
                    isOnBush = true
                } else {
                    isOnBush = false
                }
            }

            if (jumps < leastJumps) {
                leastJumps = jumps
            }
        }

        console.log(leastJumps)
    }
})