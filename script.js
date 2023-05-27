const
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
let
    snowCount = 5,
    snowSpeed = 0.3,
    left_Right = 0,
    sizeMin = 0.1,
    sizeMax = 0.8,
    snows = []

// tarmacel
function update() {
    snows.forEach(el => {
        el.Y +=(snowSpeed, 2)
        el.X += left_Right
    });
}

// nkarel
function drow() {
    snows.forEach(el => {
        ctx.beginPath()
        ctx.arc(el.X, el.Y, el.size, Math.PI * 2, 0) // stanumenq klor
        ctx.fillStyle = el.color // guyn
        ctx.fill()// lcnumenq tvyal guynov
    });
}

function loop() {
    requestAnimationFrame(loop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    update()
    drow()
    snowPush()
}
loop()

function Snow() {
    this.size = random(sizeMin, sizeMax)
    this.X = 0
    this.X = random(-200, canvas.width + 700)
    this.Y = 1
    this.color = 'white'
}

function random(min, max) {
    return (Math.random() * max) + min
}

function snowPush() {
    for (let i = 0; i < snowCount; i++) {
        const snow = new Snow()
        snows.push(snow)
    }
}

document.addEventListener('mousemove', (e) => {
    left_Right = ((2 * e.pageX / window.innerWidth) - 1) * 1
    snowSpeed = ((2 * e.pageY / window.innerHeight) + 0.3) * 1
})