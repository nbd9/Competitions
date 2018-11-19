// Problem #5
// (c) 2018 - Nick DeGroot

// DESKTOP - 170 pts.
// You’ve made a new desktop design and wish to have it tessellate across your screen, but you
// can’t find the “Tile” option on your computer. Given a design and the number of times you want
// it to repeat in each direction, print out the resulting pattern.

const fs = require('fs');

fs.readFile('./JudgeCases/desktop.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        tileInfo = input.shift().split(" ")
        height = tileInfo[0]
        width = tileInfo[1]
        numTiles = tileInfo[2]

        image = []
        
        // Looping over image in test case
        for (n = 0; n < height; n++) {
            image.push(input.shift())
        }

        // Tiling Image
        for (heightIndex = 0; heightIndex < height * numTiles; heightIndex++) {
            for (widthIndex = 0; widthIndex < numTiles; widthIndex++) {
                process.stdout.write(image[heightIndex % height])
            }
            console.log()
        }
    }
})