
// criando objeto personagem
function sprite(img) {
    this.mvRight = mvLeft = mvUp = mvDown = false
    this.imagem = img
    this.spriteX = 0
    this.spriteY = 0
    this.lagura = 24
    this.altura = 32
    this.X = 0
    this.Y = 0
    this.speed = 1
    this.count = 0

        //  metodo pra desenhar o personagem
    this.desenha= function(ctx){
        ctx.drawImage(
            this.imagem,
            this.spriteX, this.spriteY,
            this.lagura,this.altura,
            this.X, this.Y,
            this.lagura, this.altura
        )

        this.moveAnime()
    }

        //  metodo pra mover o personagem
    this.move = function(){
        if(this.mvRight){
            this.X += this.speed
            this.spriteY = this.altura *3

        }else if(this.mvLeft){
            this.X -= this.speed
            this.spriteY = this.altura * 2
            
        }else if(this.mvDown){
            this.Y += this.speed
            this.spriteY = this.altura * 0

        }else if(this.mvUp){
            this.Y -= this.speed
            this.spriteY = this.altura * 1
        }
    }

    // metodo pra fazer a animacao do personagem andando


    // seguinte... esse codigo funciona +/- assim. eu preciso atualizar a posiçao x do personagem cosntantemente para dar a impressao de q ele se meche. entt como o jogo roda infinito sem parar eu coloquei um contador q vai se atualizando ai la em baixo naquele metodo math.floor('que basicamente serve pra arredondar um numero pra baixo') eu coloquei o contador dividido por 5. a cada ciclo o comtador soma 1 e é dividido por 5, q vai dar um numero negativo no 5 primeiros ciclos, ou seja se a posiçao x ta negativa ela nao muda. mas quando o contador completar 5 ciclo( e lembrando q o computador faz esses ciclos rapidamente em milesegundos) ele vai ta igual a 5 q vai ser dividivo por 5 q vai dar 1. quando ele der 1 vai ser multiplicado pela largura do sprite ( 1 * largura = largura) e o x vai ser igual a largura. vai se mover na distancia da largura e vai carregar o outro sprite.
    this.moveAnime = function(){
        if(this.mvRight || this.mvLeft || this.mvDown || this.mvUp){
            this.count++

            if(this.count >= 40){
                this.count = 0
            }
            this.spriteX = Math.floor(this.count/5)* this.lagura

            
        }else{
            // se nenhuma tecla tiver precionada a posicao do personagem volta ao inicio

            this.spriteX = 0
            this.count = 0
        }
    }
    
}