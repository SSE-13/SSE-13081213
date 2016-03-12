/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {
    
    word = 'HELLO';

    render(context: CanvasRenderingContext2D) {
        context.font = "17px Arial";
        context.fillStyle = '#ffffff';
        context.fillText(this.word, 0, 20);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;

        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");


var rect1 = new Rect();
rect1.width = 160;
rect1.height = 40;
rect1.x = 80;
rect1.y = 268;
rect1.color = '#7baa3a'

var rect2 = new Rect();
rect2.width = 160;
rect2.height = 40;
rect2.x = 265;
rect2.y = 268;
rect2.color = '#548bde'


var text1 = new TextField();
text1.x = 90;
text1.y = 273;
text1.word = '与微信好友一起玩';

var text2 = new TextField();
text2.x = 275;
text2.y = 273;
text2.word = '与QQ好友一起玩';


var bitmap = new Bitmap();
bitmap.source = '0.jpg';

//渲染队列
var renderQueue = [bitmap,rect1,rect2, text1,text2];
//资源加载列表
var imageList = ['0.jpg'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


