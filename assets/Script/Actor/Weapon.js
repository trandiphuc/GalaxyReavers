const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        bulletsPool: cc.Node,
        bullet: {
            default: null,
            type: cc.Prefab
        },
        interval: 0.1
    },

    start() {},

    onEnable() {
        this.schedule(this.fire, this.interval);
    },

    onDisable() {
        this.unschedule(this.fire);
    },

    fire() {
        let bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        bulletPos.subSelf(cc.v2(360, 640));
        Emitter.instance.emit('fire', this.bullet, bulletPos);
    }

    // update (dt) {},
});