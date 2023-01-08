input.onGesture(Gesture.LogoUp, function () {
    led.unplot(x, y)
    y += 1
})
input.onGesture(Gesture.LogoDown, function () {
    led.unplot(x, y)
    y += -1
})
input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(x, y)
    x += -1
})
input.onGesture(Gesture.TiltRight, function () {
    led.unplot(x, y)
    x += 1
})
let lmy = 0
let lmx = 0
let y = 0
let x = 0
let mx = 2
let my = 2
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
