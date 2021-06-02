radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        endavant = value / 11
    }
    if (value == "y") {
        gir = value / 11
    }
    cuteBot.motors(endavant - gir, endavant + gir)
})
let gir = 0
let endavant = 0
radio.setGroup(1)
