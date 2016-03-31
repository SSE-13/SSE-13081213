module game {


}

var humanContainer = new render.DisplayObjectContainer();

var bag = new render.DisplayObjectContainer();
bag.x = -0.1;
bag.y = -0.1;

var head = new render.Bitmap();
head.x = -70;
head.y = -100;
var trunk = new render.Bitmap();
trunk.x = 55-120;
trunk.y = 100-250;
var left_arm = new render.Bitmap();
left_arm.x = 210-120;
left_arm.y = 90-250;
var right_arm = new render.Bitmap();
right_arm.x = -120;
right_arm.y = 90-250;
var left_leg = new render.Bitmap();
left_leg.x = 120-120;
left_leg.y = 470-250;
var right_leg = new render.Bitmap();
right_leg.x = 30-120;
right_leg.y = 468-250;


head.source = "head.png";
trunk.source = "body.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";

humanContainer.addChild(bag);
bag.addChild(head);
bag.addChild(trunk);
bag.addChild(left_arm);
bag.addChild(right_arm);
bag.addChild(left_leg);
bag.addChild(right_leg);



var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png","body.png","left_arm.png","right_arm.png","left_leg.png","right_leg.png"]);


class HumanBody extends Body {


    onTicker(duringTime: number) {

       this.x += duringTime * this.vx;
       this.rotation += duringTime * 5;

    }
}


var ticker = new Ticker();
var body = new HumanBody(humanContainer);

console.log("body: x:"+body.x+"   y:"+body.y);
console.log("humanContainer  x:"+body.displayObject.x+"y:"+body.displayObject.y);

body.vx = 5;
body.y = 400;

ticker.start([body]);











