function Sprites(spriteX, spriteY, largura, altura, cor){   
    this.spriteX = spriteX
    this.spriteY = spriteY
    this.largura = largura
    this.altura = altura
    this.cor = cor
    this.visible = true

    this.centerX = function(){
        return this.SpriteX + (this.largura/2)
    }

}
