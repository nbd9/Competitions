def calcPower(program):
    beamStrength = 1
    damage = 0
    for attack in program:
        if attack == 'C': beamStrength *= 2
        elif attack == 'S': damage += beamStrength
    return damage

t = int(input())  # number of inputs
for i in range(1, t + 1):
    defense, program = input().split(" ")
    defense = int(defense)
    program = list(program)
    
    if calcPower(program) <= defense:
        print("Case #{}: {}".format(i, 0))
    elif calcPower(reversed(sorted(program))) > defense: 
        print("Case #{}: {}".format(i, "IMPOSSIBLE"))
    else:
        # Hacking time, or else the universe is doomed.
        # Best way to reduce power is to start at the back, and work your way to the front.
        reversedProgram = program[::-1]
        numHacks = 0
        solved = False
        while not solved:
            for place in range(len(program)):
                if reversedProgram[place:place+2] == ["S", "C"]:
                    reversedProgram[place:place+2] = ["C", "S"]
                    numHacks += 1

                    # Checking to see if it works.
                    if calcPower(reversed(reversedProgram)) <= defense:
                        print("Case #{}: {}".format(i, numHacks))
                        solved = True
                        break