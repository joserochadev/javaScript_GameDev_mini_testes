
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

// arrays
var sprites = []
var blocos = []

// movimentaçao do hero
var mvRight = mvLeft = mvUp = mvDown = false


// ******** instanciando objetos ************
var hero = new sprite(50, 150, 50, 50, "#0f0")
hero.speed = 5
sprites.push(hero)

var block1 = new sprite(300, 200, 50, 50, "#c40faa")
sprites.push(block1)
blocos.push(block1)

var block2 = new sprite(200, 400, 150, 75, "#12cb45")
sprites.push(block2)
blocos.push(block2)


// **********************************************


// ****************** configunrando os comandos do teclado ******************
window.addEventListener('keydown', function(e){
    switch(e.keyCode){
        case 37:
            mvLeft = true
            break
        case 38:
            mvUp = true
            break
        case 39:
            mvRight = true
            break
        case 40:
            mvDown = true
            break
    }
})
window.addEventListener('keyup', function(e){
    switch(e.keyCode){
        case 37:
            mvLeft = false
            break
        case 38:
            mvUp = false
            break
        case 39:
            mvRight = false
            break
        case 40:
            mvDown = false
            break
    }
})
// *********************************************




function atualiza(){
    // ********* ativando a movimentaçao do hero *****************
    if(mvLeft){
        hero.X -= hero.speed
    }
    if(mvUp){
        hero.Y -= hero.speed
    }
    if(mvRight){
        hero.X += hero.speed
    }
    if(mvDown){
        hero.Y += hero.speed
    }
    // ******************************************

    // ********* codigo genial/maluco pra impedir q o hero saia da canvas **********

    // a funçao Math.max() retorna o maior valor entre numero e a Math.min() retorna o menor valor. observe entt q a posiçao X e Y deles nunca vai ser negativa "q e isso q faz o objeto sair da tela" pq no max() ele recebe 0 entt entre um numero negativo e 0 o maior e 0. e no outro lado, por exemplo no X, no min() dele, ta pegando a largura da canvas - largura do hero = 450 e a posiçao X q tbm ta dando 450 logo o valor do min() var ser sempre o msm e assim o objeto nao passa. a msm coisa acontece no Y do hero.
    hero.X = Math.max(0, Math.min(canvas.width - hero.largura, hero.X))
    hero.Y = Math.max(0, Math.min(canvas.height - hero.altura, hero.Y))

    // *****************************************

    for(var i in blocos){
        var blk = blocos[i]
        if(blk.visible){
            blockRect(blk, hero)
            
        // para fazer o objeto empurrar os blocos e so inverter a posiçao do r1 e r2 la no arquivo de script, la no blockRect()
        }
    }

}

function desenha(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // essa e uma estrutura q serve para varrer o array de sprites e pra cada indice la dentro ele cria um objeto. ai la em cima vc instancia o objeto, configura todos os atributos e depois adiciona esse objeto ao array com o metodo "push()". nao entendi muito mas se "visible" for = true, ele e desenhado na tela.
    for(var i in sprites){
        var spr = sprites[i]
        if(spr.visible){
            ctx.fillStyle = spr.cor
            ctx.fillRect(spr.X, spr.Y, spr.largura, spr.altura)
        }
    }

}

function loop(){
    atualiza()
    desenha()

    requestAnimationFrame(loop)
}

loop()

