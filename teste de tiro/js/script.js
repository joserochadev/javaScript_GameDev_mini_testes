(function(){

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

// movimentos 
var mvLeft = mvUp = mvRight = mvDown = shoot = spaceIsDown = false

window.addEventListener('keydown', function(e){
    var key = e.keyCode
    switch(key){
        case 37:
            mvLeft = true
            break
        case 39:
            mvRight = true
            break
        case 32:
            if(!spaceIsDown){
                shoot = true
                spaceIsDown = true
            }
            break
    }
})
window.addEventListener('keyup', function(e){
    var key = e.keyCode
    switch(key){
        case 37:
            mvLeft = false
            break
        case 39:
            mvRight = false
            break
        case 32:
            if(spaceIsDown){
                shoot = false
                spaceIsDown = false
            }
            break
    }
})

// Arrays
var sprite = []
var blocks = []
var missels = []
console.log(missels)

var hero = new Sprites((canvas.width/2)-50, canvas.height-35, 100, 30, "#0f0")
hero.speed = 4
sprite.push(hero)

var block1 = new Sprites((canvas.width/2)-10, 0, 50, 30, "#00f")
sprite.push(block1)



function atualiza(){
    if(mvRight){
        hero.spriteX += hero.speed
    } else if( mvLeft){
        hero.spriteX -= hero.speed
    }

    if(shoot){
        fireMissel()
        console.log('atirou')
        shoot = false
    }

    hero.spriteX = Math.max(0, Math.min(canvas.width - hero.largura, hero.spriteX))
    
    for(var i in missels){
        var missele = missels[i]
        missele.spriteY += missele.vy

        if(missele.spriteY < -missele.altura){
            removeObj(missele, missels)
            removeObj(missele, sprite)
            console.log('removeu')

            i--
        }
    }


}

function fireMissel(){
    var missel = new Sprites(hero.spriteX + (hero.largura/2), hero.spriteY - 10, 6, 10, '#f00')
    missel.vy = -8
    sprite.push(missel)
    missels.push(missel)
}
function removeObj(objeto, array){
    var i = array.indexOf(objeto)
    if(i !== -1){
        array.splice(i,1)
    }
}

function desenha(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    for(var i in sprite){
        var spr = sprite[i]
        if(spr.visible){
            ctx.fillStyle = spr.cor 
            ctx.fillRect(spr.spriteX, spr.spriteY, spr.largura, spr.altura)
        }
    }

}

function loop(){
    atualiza()
    desenha()
    requestAnimationFrame(loop)
}

loop()
}())