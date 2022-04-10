
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

// carragar a imagem do sprite
var img = new Image()
img.src = 'img/img.png'

// carregando cenario
var cenario = new Image()
cenario.src = 'img/scene.png'

// instanciando o personagem por meio da imagem
var sprite = new sprite(img)

// ***  MAPEANDO AS TECLAS PARA FAZER A MOVIMENTAÇAO DO PERSONAGEM **
    window.addEventListener("keydown", keyDown, false)
    window.addEventListener("keyup", keyUp, false)

function keyDown(e){
    switch(e.keyCode){
        case 37:
            sprite.mvRight = false
            sprite.mvLeft = true
            sprite.mvUp = false
            sprite.mvDown = false
            break
        case 38:
            sprite.mvRight = false
            sprite.mvLeft = false
            sprite.mvUp = true
            sprite.mvDown = false
            break

        case 39:
            sprite.mvRight = true
            sprite.mvLeft = false
            sprite.mvUp = false
            sprite.mvDown = false
            break

        case 40:
            sprite.mvRight = false
            sprite.mvLeft = false
            sprite.mvUp = false
            sprite.mvDown = true
            break

    }
}

function keyUp(e){
    switch(e.keyCode){
        case 37:
            sprite.mvLeft = false
            break
        case 38:
            sprite.mvUp = false
            break

        case 39:
            sprite.mvRight = false
            break

        case 40:
            sprite.mvDown = false
            break
    }
}


function atualiza(){
    sprite.move()
}

function desenha(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(cenario, 0, 0, canvas.width, canvas.height)
    sprite.desenha(ctx)


}


function loop(){
    atualiza()
    desenha()

    requestAnimationFrame(loop)
}

loop()