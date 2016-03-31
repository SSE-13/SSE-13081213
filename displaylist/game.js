var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var bag = new render.DisplayObjectContainer();
bag.x = -0.1;
bag.y = -0.1;
var head = new render.Bitmap();
head.x = -70;
head.y = -100;
var trunk = new render.Bitmap();
trunk.x = -85;
trunk.y = -130;
var left_arm = new render.Bitmap();
left_arm.x = -75;
left_arm.y = -140;
var right_arm = new render.Bitmap();
right_arm.x = -90;
right_arm.y = -140;
var left_leg = new render.Bitmap();
left_leg.x = -100;
left_leg.y = -145;
var right_leg = new render.Bitmap();
right_leg.x = -80;
right_leg.y = -145;
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
renderCore.start(humanContainer, ["head.png", "body.png", "left_arm.png", "right_arm.png", "left_leg.png", "right_leg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += duringTime * this.vx;
        this.rotation += duringTime * 5;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
console.log("body: x:" + body.x + "   y:" + body.y);
console.log("humanContainer  x:" + body.displayObject.x + "y:" + body.displayObject.y);
body.vx = 5;
body.y = 400;
ticker.start([body]);
//# sourceMappingURL=game.js.map