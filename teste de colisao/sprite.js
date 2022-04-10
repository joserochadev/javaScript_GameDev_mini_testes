function sprite(X, Y, largura, altura, cor){

    this.X = X
    this.Y = Y
    this.largura = largura
    this.altura = altura
//     this.X = X
//     this.Y = Y
    this.cor = cor
    this.visible = true

    this.centerX = function() {
        return this.X + this.metadeLargura()
    }

    this.centerY = function() {
        return this.Y + this.metadeAltura()
    }
    this.metadeLargura = function () {
        return this.largura / 2
    }
    this.metadeAltura = function() {
        return this.altura / 2
    }
}

