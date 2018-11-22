// Problem #7
// (c) 2018 - Nick DeGroot

// LOGIC PUZZLE - 190 pts. 
// Your school is attempting to showcase the detriments of student hypercompetitiveness by running a
// (completely ethical) experiment on a group of 10 students. First, each student takes a 100 question test;
// their score on the test is the number of correctly answered questions. Instead of telling students their
// score, they grab a few pairs of students and tell them who scored higher(this was supposed to impress
// on them that comparing scores causes emotional damage). After this process, the experimenters offer the
// students a prize for collaboratively comparing their scores. 

// Solution below misses one test case.

const fs = require('fs');
p = console.log

fs.readFile('./JudgeCases/logic.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numCases = input.shift()

    // Static Dataset. [Student1, Student2, didTie]
    // False means Student1 > Student2
    const basicMatches = [
        ['Xis', 'Eno', false],
        ['Ent', 'Vife', false],
        ['Neves', 'Rouf', false],
        ['Thige', 'Owt', false],
        ['Vife', 'Reeth', false],
        ['Enin', 'Owt', false],
        ['Eno', 'Neves', false],
        ['Thige', 'Rouf', false],
        ['Eno', 'Vife', false],
        ['Ent', 'Owt', true],
        ['Neves', 'Enin', true]
    ]

    var allMatches = [...basicMatches]

    // TODO: Generate all matches.
    for (iter = 0; iter < basicMatches.length; iter++) {
        newMatches = []
        for (i = 0; i < allMatches.length; i++) {
            let winner = allMatches[i][0]
            let loser = allMatches[i][1]

            for (n = i + 1; n < allMatches.length; n++) {
                if (allMatches[n][0] == loser) {
                    // By extension, the winner also beat the loser in this match.
                    newMatches.push([winner, allMatches[n][1], false])
                }
            }
        }
        allMatches.push(...newMatches)
    }
    console.log(allMatches)

    // Looping over number of cases
    for (i = 0; i < numCases; i++) {
        students = input.shift().split(" ")

        foundMatch = false
        for (index in allMatches) {
            match = allMatches[index]

            if (students[0] == match[0] && students[1] == match[1]) {
                if (match[2]) { console.log("=") }
                else { console.log(match[0]) }
                foundMatch = true
                break
            } else if (students[0] == match[1] && students[1] == match[0]) {
                if (match[2]) { console.log("=") }
                else { console.log(match[0]) }
                foundMatch = true
                break
            }
        }

        if (!foundMatch) {
            console.log("?")
        }
    }
})