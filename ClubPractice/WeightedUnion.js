id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
length = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

function findRoot(a) {
    if (id[a] == a) {
        return a
    } else {
        return findRoot(id[a])
    }
}

function union(a, b) {
    // Which has smaller length
    if (length[a] > length[b]) {
        // A longer - merge B into A
        rootB = findRoot(b)
        rootA = findRoot(a)
        id[rootB] = rootA
        length[rootA] += length[rootB]
    } else {
        // Either equal or B longer - use A
        rootB = findRoot(b)
        rootA = findRoot(a)
        id[rootA] = rootB
        length[rootB] += length[rootA]
    }
}

function connected(a, b) {
    return findRoot(a) == findRoot(b)
}

// Test Cases
p = console.log
u = union
c = (a, b) => p(connected(a, b))

u(0, 5)
u(5, 6)
c(0, 6)
u(2, 7)
u(3, 8)
u(4, 9)
c(1, 2)
u(2, 3)
c(8, 9)
c(7, 8)
