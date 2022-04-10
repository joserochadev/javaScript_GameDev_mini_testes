
function sprite(img ,ctx){
    this.img = img
    this.spriteX = 0
    this.spriteY = 0
    this.largura = 32
    this.altura = 48
    this.X = 0
    this.Y = 0
    this.right = this.left = this.up = this.down = this.space = false
    this.speed = 3
    this.count = 0
    this.ctx = ctx

    this.desenha = function(ctx){
        ctx.drawImage(
            this.img,
            this.spriteX, this.spriteY,
            this.largura, this.altura,
            this.X, this.Y,
            this.largura, this.altura

            )
            this.animaAsh()
    }

    this.move = function(){
        if(this.left){
            this.X -= this.speed
            this.spriteY = this.altura * 1
            
        }else if(this.right){
            this.X += this.speed
            this.spriteY = this.altura * 2

        }else if(this.up){
            this.Y -= this.speed
            this.spriteY = this.altura *3

        }else if(this.down){
            this.Y += this.speed
            this.spriteY = this.altura *0

        }
        if(this.space){
            this.atira()
            console.log('atsdjha')
        }
    }


    this.animaAsh = function(){
        if(this.left  || this.right || this.up || this.down){
            this.count++

            if(this.count >= 40){
                this.count = 0
            }
            this.spriteX = Math.floor(this.count / 10)*this.largura

        }else{
            this.spriteX = 0
            this.count = 0
        }
    }

    this.atira = function(){
        this.ctx.fillRect(this.X + this.largura, this.Y, 20, 20)
    }
}