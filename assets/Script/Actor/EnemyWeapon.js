cc.Class({
    extends: cc.Component,

    properties: {
        bullet: {
            default: null,
            type: cc.Prefab
        },
        interval: 2
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onEnable() {
        this.schedule(this.fire, this.interval);
    },

    onDisable() {
        this.unschedule(this.fire);
    },
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },
    fire() {
        let bulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        this.add(bulletPos);
        this.interval = this.getRandom(1, 20);
    },

    add(bulletPos) {
        let bulletNode = cc.instantiate(this.bullet);
        bulletNode.active = true;
        bulletPos.subSelf(cc.Canvas.instance.node.position);
        bulletNode.position = bulletPos;
        bulletNode.parent = cc.Canvas.instance.node;
    },

    // update (dt) {},
});