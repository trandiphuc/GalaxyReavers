cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) {
        let bulletPos = this.node.position;
        bulletPos.addSelf(this.speed.mul(dt));

        let screenSize = cc.Canvas.instance.node.getContentSize();
        let top = screenSize.height >> 1;
        let bottom = -top;
        let right = screenSize.width >> 1;
        let left = -right;

        let outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom || bulletPos.y > top;
        if (outScreen) {
            this.node.destroy();
            return;
        }
        this.node.scale += dt;
        this.node.position = bulletPos;

    }
});