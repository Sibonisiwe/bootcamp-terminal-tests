module.exports = function (olderObject) {
    var sales = 0
    var newerObject = {};
    for (var i = 0; i < olderObject.length; i++) {

        const element = olderObject[i].day;
        if (newerObject[element] == undefined) {
            newerObject[element] = olderObject[i].sales

        }
        else {
            newerObject[element] += olderObject[i].sales

        }
    }
    var smallest = 0;
    var largest = '';
    for (var i in newerObject) {

        if (smallest < newerObject[i]) {
            smallest = newerObject[i]
            largest = i;
        }
    }
    return largest;
}