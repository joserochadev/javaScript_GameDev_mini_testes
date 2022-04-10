function blockRect(r1, r2){
    // r1 e o objeto a ser bloqueado o "hero"
    // r2 e o bloco, a parede

    // catetos
    var catX = r1.centerX() - r2.centerX()
    var catY = r1.centerY() - r2.centerY()

    var somaMetadeLargura  = r1.metadeLargura() + r2.metadeLargura()
    var somaMetadeAltura  = r1.metadeAltura() + r2.metadeAltura()

    // so ha colisao quando a distancia entre os centros dos objetos for menor q a soma de suas larguras

    // Math.abs() tranforma os numeros em absolutos. ele ignora o sinal. nao importa se e positivo ou negativo ele mostra so o numero
    if(Math.abs(catX) < somaMetadeLargura && Math.abs(catY) < somaMetadeAltura){

        // ** se o objeto encosta nos bloco eles somem **
        // r2.visible = false

        // setTimeout(()=>{
        //     r2.visible = true
        // }, 500)

        // ************* codigo pro objeto nao atravesar o bloco ******************
         // so ha colisao quando a distancia entre os centros dos objetos for menor q a soma de suas larguras
        var overlapX = somaMetadeLargura - Math.abs(catX)
        var overlapY = somaMetadeAltura - Math.abs(catY)

        if(overlapX >= overlapY){ // se a colisao for por cima ou por baixo
            if(catY > 0){// por cima
                r1.Y += overlapY
            }else {
                r1.Y -= overlapY
            }
        }else{//se a colisao for pela esquerda ou pela direita
            if(catX > 0){// colisao pela esquerda
                r1.X += overlapX
            }else{
                r1.X -= overlapX
            }
        }
        //******************************************************* 

        // para fazer o objeto empurrar os blocos e so inverter a posiçao do r1 e r2 la no arquivo de script, la no blockRect()
    }
}