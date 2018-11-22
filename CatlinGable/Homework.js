// Problem #4
// (c) 2018 - Nick DeGroot

// HOMEWORK  - 160 pts.
// An endless stream of homework stands between you and a relaxing night of sleep. You have to
// complete several assignments of various durations. Between assignments, you take short
// breaks, each of which is ten percent of the total amount of time you have been working since
// you began your homework(time spent on breaks does not count toward time working). You are
// done with your homework once you have completed the last assignment. You notice that the
// time it takes for you to finish your homework depends on the order in which you complete your
// assignments. Now, you would like to figure out the difference between the maximum and
// minimum amounts of time in which you can finish all your work given a certain set of
// assignments.

const fs = require('fs');

fs.readFile('./JudgeCases/homework.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        numAssignments = input.shift()
        assignments = input.shift().split(" ").map(Number)

        // Getting shortest time
        shortTime = 0
        timeWorking = 0
        assignments.sort(function (a, b) { return a - b })
        for (n = 0; n < numAssignments; n++) {
            assignmentTime = assignments[n] 
            timeWorking += assignmentTime
            shortTime += assignmentTime + (timeWorking * 0.1) 
        }

        // Getting long time
        longTime = 0
        timeWorking = 0
        assignments.reverse()
        for (n = 0; n < numAssignments; n++) {
            assignmentTime = assignments[n]
            timeWorking += assignmentTime
            longTime += assignmentTime + (timeWorking * 0.1)
        }

        console.log((longTime - shortTime).toFixed(1))
    }
})