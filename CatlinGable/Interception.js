// Problem #2
// (c) 2018 - Nick DeGroot

// INTERCEPTION  - 140 pts.
// A hangry raptor hurls a pair of scissors at your airplane! Dismayed, you quickly shove the raptor
// aside and hurl a rock at the scissors hoping to intercept it before it slices your airplane.
// Given the velocity of the scissors and the distance between the projectiles at initial position and
// the airplane, determine the minimum velocity needed to intercept the pair of scissors with the
// rock. You launch the rock 1 second after the scissors are thrown at the same place it is thrown,
// and all projectiles travel along the same line. The scissors and rock are special objects
// impervious to the effects of gravity and air resistance.

const fs = require('fs');

fs.readFile('./JudgeCases/interception.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        data = input.shift().split(" ")
        scissorVelocity = data[0]
        airplaneDist = data[1]

        minVelocity = ((airplaneDist * scissorVelocity) / (airplaneDist - scissorVelocity)) + .0001 // Add small amount just to make sure scissors hit BEFORE, not during.

        console.log(Math.ceil(minVelocity))
    }
})