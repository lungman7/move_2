function up () {
    if (my > lmy) {
        led.unplot(x, y)
        y += 1
    }
}
function left () {
    if (mx > lmx) {
        led.unplot(x, y)
        x += 1
    }
}
function down () {
    if (my < lmy) {
        led.unplot(x, y)
        y += -1
    }
}
function riight () {
    if (mx < lmx) {
        led.unplot(x, y)
        x += -1
    }
}
let lmx = 0
let lmy = 0
let y = 0
let x = 0
let my = 0
let mx = 0
mx = 2
my = 2
x = 2
y = 2
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    lmx = mx
    lmy = my
    mx = input.acceleration(Dimension.X)
    my = input.acceleration(Dimension.Y)
    serial.writeNumber(input.acceleration(Dimension.X))
    serial.writeNumber(input.acceleration(Dimension.Y))
    riight()
    left()
    up()
    down()
    if (x < 0) {
        x = 0
    }
    if (x > 4) {
        x = 4
    }
    if (y < 0) {
        y = 0
    }
    if (y > 4) {
        y = 4
    }
    led.plot(x, y)
})
