function findMatching (drivers, name) {
    const found = drivers.filter(element => element.toUpperCase() === name.toUpperCase())
     return found
}

function fuzzyMatch(drivers, letter) {
    const find = drivers.filter(string => string.startsWith(letter))
            return find
}

function matchName (drivers, string) {
    const match = drivers.filter(drivers => drivers.name === string)
    return match
}