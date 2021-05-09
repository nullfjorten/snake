// for (let y = 0; y <= 4; y++) {
// for (let x = 0; x <= 4; x++) {
// let snake: Array[] = []
// if (snake[y][x]) {
// led.plot(x, y)
// }
// }
// }
function drawSnake () {
    for (let pixel of snake) {
        led.plot(pixel[0], pixel[1])
    }
}
let x = 0
let y = 0
let snake: number[][] = []
snake = []
let direction = 2
let sensitivity = 100
let showDebug = false
basic.forever(function () {
    // right
    if (input.acceleration(Dimension.X) > sensitivity) {
        direction = 2
        if (showDebug == true) {
            led.plot(4, 2)
        }
    }
    // down
    if (input.acceleration(Dimension.Y) > sensitivity) {
        direction = 3
        if (showDebug == true) {
            led.plot(2, 4)
        }
    }
    // left
    if (input.acceleration(Dimension.X) < sensitivity * -1) {
        direction = 4
        if (showDebug == true) {
            led.plot(0, 2)
        }
    }
    // up
    if (input.acceleration(Dimension.Y) < sensitivity * -1) {
        direction = 1
        if (showDebug == true) {
            led.plot(2, 0)
        }
    }
    if (direction == 1) {
        y += -1
    }
    if (direction == 2) {
        x += 1
    }
    if (direction == 3) {
        y += 1
    }
    if (direction == 4) {
        x += -1
    }
    snake.push([x, y])
    drawSnake()
    if (x < 0 || x > 4 || y < 0 || y > 4) {
        game.gameOver()
    }
    basic.pause(1000)
    basic.clearScreen()
})
