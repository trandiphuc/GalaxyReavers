"use strict";
cc._RF.push(module, '08a00i/tB9OU66eurz/uY48', 'EnemyWeapon');
// Script/Actor/EnemyWeapon.js

"use strict";

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

    start: function start() {},
    onEnable: function onEnable() {
        this.schedule(this.fire, this.interval);
    },
    onDisable: function onDisable() {
        this.unschedule(this.fire);
    },
    getRandom: function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },
    fire: function fire() {
        var bulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        this.add(bulletPos);
        this.interval = this.getRandom(1, 20);
    },
    add: function add(bulletPos) {
        var bulletNode = cc.instantiate(this.bullet);
        bulletNode.active = true;
        bulletPos.subSelf(cc.Canvas.instance.node.position);
        bulletNode.position = bulletPos;
        bulletNode.parent = cc.Canvas.instance.node;
    }
}

// update (dt) {},
);

cc._RF.pop();