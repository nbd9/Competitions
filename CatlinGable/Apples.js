// Problem #3
// (c) 2018 - Nick DeGroot

// APPLES - 150 pts.
// In need of community service hours, you volunteer at your school’s cafeteria.It recently
// received a large shipment of apples of various brands.Your task is to sort the apples by brand
// into baskets.Each basket can only hold 10 apples, so you must allow several baskets per
// brand.You are wondering how many baskets you need to hold all the apples.

const fs = require('fs');

fs.readFile('./TestCases/apples.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        baskets = 0
        numShipments = input.shift()
        
        // Looping over apples in test case
        for (n = 0; n < numShipments; n++) {
            baskets += Math.ceil(input.shift().split(" ")[1] / 10.0) 
        }

        console.log(baskets)
    }
})

