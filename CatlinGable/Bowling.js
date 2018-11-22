// Problem #10
// (c) 2018 - Nick DeGroot

// SUPER BOWLING  - 220 pts.
// You are playing Super Bowling in Physical Education class today! Nothing is more fun than trying to roll
// explosive bowling balls towards pins when there are no lanes, no bumpers, and some bowling ball paths
// intersect...
// Everyone starts at a different location and rolls one bowling ball. If two bowling balls collide (which
// happens when their centers are less than one meter apart), they explode! The nervous TA, standing far
// away from the action, would like to know how many bowling balls remain unexploded after certain periods
// of time.


const fs = require('fs');
// fs.readFile('./JudgeCases/interception.txt', 'utf8', function (err, data) {
fs.readFile('./JudgeCases/bowling.txt', 'utf8', function (err, data) {
    input = data.split('\n')
    numbers = input.shift().split(" ").map(Number)
    numBalls = numbers[0]
    numQuestions = numbers[1]

    // Looping over number of balls
    masterBalls = []
    for (i = 0; i < numBalls; i++) {
        masterBalls.push(input.shift().split(" ").map(Number))
    }

    findNumBalls = (time) => {
        getDistance = (ballOne, ballTwo) => {
            return (((ballOne[0] - ballTwo[0]) ** 2) + ((ballOne[1] - ballTwo[1]) ** 2)) ** 0.5
        }

        balls = [...masterBalls]
        for (second = 0; second <= time; second+=0.1) {
            destroyedBalls = []
            // console.log(`-- Time: ${second} seconds | Balls Remaining: ${balls.length}--`)
            // Updating position of balls

            for (i = 0; i < balls.length; i++) {
                for (n = i+1; n < balls.length; n++) {
                    if (getDistance(balls[i], balls[n]) < 1) {
                        // console.log(`Ball ${i}: (${balls[i][0]}, ${balls[i][1]}) Ball ${n}: (${balls[n][0]}, ${balls[n][1]}) | Distance: ${getDistance(balls[i], balls[n])}`)
                        if (!(n in destroyedBalls)) {
                            destroyedBalls.push(n)
                        }

                        if (!(i in destroyedBalls)) {
                            destroyedBalls.push(i)
                        }
                    }
                }
            }

            destroyedBalls.sort(function (a, b) { return b - a })
            for (ball in destroyedBalls) {
                balls.splice(destroyedBalls[ball], 1)
            }

            for (index in balls) {
                ball = balls[index]
                xpos = ball[0]
                ypos = ball[1]
                xvel = ball[2]
                yvel = ball[3]

                balls[index] = [xpos + (xvel*0.1), ypos + (yvel*0.1), xvel, yvel]
            }
        }

        return balls.length
    }

    for (q = 0; q < numQuestions; q++) {
        time = parseInt(input.shift())
        console.log(findNumBalls(time))
    }
})