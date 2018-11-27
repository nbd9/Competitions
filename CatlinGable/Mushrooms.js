// Problem #14
// (c) 2018 - Nick DeGroot

// MUSHROOMS - 260 pts. 
// You are in a mythical forest and want to gather giant mushrooms. After 7 hours of
// trudging, you finally find a giant mushroom surrounded by a grove of ​b​​ pineapple 
// bushes. As every experienced mushroom gatherer knows, one must collect at least ​b​​ 
// pineapples for self defense, otherwise the flying pineapple monster will transmogrify 
// you into a pineapple (yikes!)! Since it is getting dark, you only have enough time for 
// one revolution around the bushes. Each bush contains various numbers of pineapples. To 
// remove all ​p​​ pineapples from a bush, you need to throw ​p​​^2 apples at the bush. You have 
// to carry all the pineapples collected; every time you finish passing a bush (including 
// the first and last ones), regardless of whether you collected any pineapples at that 
// bush, you eat one apple per pineapple collected.

// Since your apple reserves are running low, you wonder what is the smallest number of 
// apples you need to harvest the giant mushroom.

// THIS SOLUTION FAILS ON THE LARGE DATASETS (num >= 20).

const fs = require('fs');

fs.readFile('./JudgeCases/mushrooms.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Eatten is a list corresponding to whether or not the specific bush was collected.
    findApples = (collected, bushes) => {
        numApples = 0
        numPineapples = 0
        for (bush in bushes) {
            if (collected[bush] == 1) {
                // the bush was collected
                numApples += (bushes[bush] ** 2)
                numPineapples += bushes[bush]
            }

            numApples += numPineapples
        }

        if (numPineapples < bushes.length) {
            return undefined
        }
        return numApples
    }

    for (i = 0; i < numCases; i++) {
        numBushes = input.shift()
        bushes = input.shift().split(" ").map(Number)

        // Find minApples
        minApples = Infinity
        // Loop through all possibilities
        for (n = 0; n < (2 ** numBushes); n++) {
            collectedBushes = n.toString(2)
            collectedBushes = "0".repeat(numBushes - collectedBushes.length) + collectedBushes
            // console.log(`n = ${n}, binary = ${collectedBushes}`)
            collectedBushes = collectedBushes.split("")

            apples = findApples(collectedBushes, bushes)
            if (!apples) {
                continue
            }

            if (apples >= numBushes && minApples > apples) {
                minApples = apples
            }
        }

        console.log(minApples)
    }
})