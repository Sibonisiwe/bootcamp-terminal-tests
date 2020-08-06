module.exports = function (regNumber) {
    switch (regNumber) {
        case "CY":
            return "Bellville";
        case "CJ":
            return "Paarl";
        case "CA":
            return "Cape Town";
        default:
            return "Some other place!"
    }
}