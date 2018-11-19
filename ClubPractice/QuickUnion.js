id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function findRoot (a) {
    numOperations++
    if (id[a] == a) {
        return a
    } else {
        return findRoot(id[a])
    }
}

function union(a, b) {
    id[findRoot(a)] = findRoot(b)
}

function connected(a, b) {
    return findRoot(a) == findRoot(b)
}

// Test Cases
p = console.log
u = union
c = (a, b) => p(connected(a, b))

u(0,5)
u(5,6)
c(0,6)
u(2,7)
u(3,8)
u(4,9)
c(1,2)
u(2,3)
c(8,9)
c(7,8)
p(numOperations)