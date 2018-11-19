var fs = require('fs')
fs.readFile('input.in', 'utf8', function (err, data) {
    input = data.split('\n')
    output = []
    for (ind = 1; ind < input.length-1; ind++) {
        output[ind-1] = `Case #${ind}: ${tidyNumbers(input[ind])}`
    }
    fs.writeFile('output.txt', output.join('\n'))
})

function tidyNumbers(maxNumber) {
    numberArray = maxNumber.toString().split('')

    for (i = numberArray.length; i != 0; i--) {
        if (numberArray[i] < numberArray[i-1]) {
            numberArray[i - 1] = numberArray[i - 1] - 1
            if (numberArray[i - 1] == 0) { numberArray[i-1] = null }
            // Set ending numbers to 9
            for (n = i; numberArray.length > n; n++) {
                numberArray[n] = 9
            }
        }
    }

    return numberArray.join('')
}