cc.Class({
    extends: cc.Component,

    properties: {
        maxSpeed: 10,
    },

    onLoad() {
        this._tmpPos = this.node.position;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },

    onTouchMove(event) {
        let touches = event.getTouches();
        let moving = touches[0].getDelta();
        this._tmpPos.addSelf(moving);
    },

    onTouchEnd() {
        this._tmpPos = this.node.position;
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'enemy' || other.node.group === 'enemy_bullet') {
            this.die();
        }
    },

    die() {
        this.node.destroy();
    },

    update(dt) {
        let currentPos = this.node.position;
        let delta = this._tmpPos.sub(currentPos);
        let distance = delta.magSqr();

        let maxSpeedPerFrame = this.maxSpeed * dt;
        if (distance > maxSpeedPerFrame * maxSpeedPerFrame) {
            delta.normalizeSelf();
            delta.mulSelf(maxSpeedPerFrame);
        }

        this.node.position = this.node.position.add(delta);

        let screen = cc.Canvas.instance.node.getContentSize();
        this.node.x = cc.misc.clampf(this.node.x, -screen.width / 2, screen.width / 2);
        this.node.y = cc.misc.clampf(this.node.y, -screen.height / 2, screen.height / 2);
    },

    onDestroy() {
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
});
