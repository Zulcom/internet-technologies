function drawEllipse(ctx, x, y, a, b) {
    // Запоминаем положение системы координат (CК) и масштаб
    ctx.save();
    ctx.beginPath();

    // Переносим СК в центр будущего эллипса
    ctx.translate(x, y);

    /*
     * Масштабируем по х.
     * Теперь нарисованная окружность вытянется в a / b раз
     * и станет эллипсом
     */

    ctx.scale(a / b, 1);

    // Рисуем окружность, которая благодаря масштабированию станет эллипсом
    ctx.arc(0, 0, b, 0, Math.PI * 2, true);

    // Восстанавливаем СК и масштаб
    ctx.restore();
    ctx.closePath();
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animation(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(0,0,randomInteger(0,500+500),randomInteger(0,500+500));
    return setTimeout(animation, 500);
}
function initCanvas(){

    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,500,500);

    //JSON object
      var json_arr = [
        ["circle",50,50,10],
        ["square",150,50,25],
        ["ellipse",200,200,30,40]
    ];
    json_arr.forEach(function (value) {
        ctx.beginPath();
            switch (value[0]){
                case "circle":
                    ctx.arc(value[1],value[2],value[3],0,2*Math.PI);
                    break;
                case "square":
                    ctx.rect(value[1],value[2],value[3],value[3]);
                    break;
                case "ellipse":
                    drawEllipse(ctx,value[1],value[2],value[3],value[4]);
                    break;
                case "bezier curve":
                    ctx.moveTo(value[1],value[2]);
                    ctx.bezierCurveTo(value[3],value[4],value[5],value[6],value[7],value[8]);
                    break;
            }
        ctx.stroke();
    })
    /*
    for(var i = 0; i < buildings.length ; i++ ){
        var line = buildings[i];
        ctx.fillStyle = line.bgColor;
        ctx.fillRect(line.px,line.py,line.w,line.h);
    }*/

}


window.addEventListener('load',function(event){
    initCanvas();
    setTimeout(animation, 500);
    c = document.getElementById("canvas");
    c.addEventListener("mousemove",initCanvas,false)

} );


