module.exports = function (bill) {
    var phoneBill = bill.split(",")
    var cost = 0
    for (var i = 0; i < phoneBill.length; i++) {
        var trimBill = phoneBill[i].trim();
        if (trimBill.startsWith("c")) {
            cost += 2.75
        } else if (trimBill.startsWith("s")) {
            cost += 0.65

        }
    }

    return "R" + cost.toFixed(2);
}