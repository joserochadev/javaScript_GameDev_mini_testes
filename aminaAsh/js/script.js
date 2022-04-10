
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var img = new Image()
img.src ="img/ASH.png"

var sprite = new sprite(img, ctx)

window.addEventListener('keydown', keydown)
window.addEventListener('keyup', keyup)

function keydown(e){
    switch(e.keyCode){
        case 37:
            sprite.right = false
            sprite.left = true
            sprite.up = false
            sprite.down = false
            break
        case 38:
            sprite.right = false
            sprite.left = false
            sprite.up = true
            sprite.down = false
            break
        case 39:
            sprite.right = true
            sprite.left = false
            sprite.up = false
            sprite.down = false
            break
        case 40:
            sprite.right = false
            sprite.left = false
            sprite.up = false
            sprite.down = true
            break
        case 32:
            sprite.space = true
            break
    }
}

function keyup(e){
    switch(e.keyCode){
        case 37:
            sprite.left = false
            break
        case 38:
            sprite.up = false
            break
        case 39:
            sprite.right = false
            break
        case 40:
            sprite.down = false
            break
        case 32:
            sprite.space = false
            break
    }
}

function atualiza(){
    sprite.move()

    sprite.X = Math.max(0, Math.min(canvas.width - sprite.largura, sprite.X))
    sprite.Y = Math.max(0, Math.min(canvas.height - sprite.altura, sprite.Y))
}

function desenha(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    sprite.desenha(ctx)
}

function loop(){
    atualiza()
    desenha()

    requestAnimationFrame(loop)
}

loop()