(function(){
    const canvas = document.querySelector('canvas')
    var ctx = canvas.getContext('2d')

    var img = new Image()
    img.src = '../img/aviao.png'

    img.addEventListener('load', loop)

    var obj = {
        x: 100,
        y: 100,
        width: 80,
        height: 64,
        img: img,
        rotation: 0,
        centerX: function(){
            return this.x + (this.width/2)
        },
        centerY: function(){
            return this.y + (this.height/2)
        }
    }

    var mouse = {}

    canvas.addEventListener('mousemove', function(e){
        mouse.x = e.clientX - canvas.offsetLeft
        mouse.y = e.clientY - canvas.offsetTop
    })


    function update(){
        // esse codigo rotaciona o objeto
        var dirtX = mouse.x - obj.centerX()
        var dirtY = mouse.y - obj.centerY()
        obj.rotation = Math.atan2(dirtY, dirtX)

        // esse codigo e pro objeto seguir o mouse
        var distance = Math.sqrt(dirtX*dirtX + dirtY*dirtY)
        if(distance >= 1){
            obj.x += dirtX *0.1
            obj.y += dirtY *0.1
        }

    }

    function render(){
        ctx.clearRect(0,0,canvas.width,canvas.height)

        ctx.save()
        ctx.translate(obj.centerX(), obj.centerY())
        ctx.rotate(obj.rotation)
        ctx.drawImage(obj.img, 0, 0, obj.width, obj.height, -obj.width/2, -obj.height/2, obj.width, obj.height)
        ctx.restore()

    }

    function loop(){
        update()
        render()

        requestAnimationFrame(loop)
    }




}())