"use strict";
cc._RF.push(module, '0ad96p3Ly9EcaQKAJ/FtwH3', 'EnemyBullet');
// Script/Actor/EnemyBullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    update: function update(dt) {
        var bulletPos = this.node.position;
        bulletPos.addSelf(this.speed.mul(dt));

        var screenSize = cc.Canvas.instance.node.getContentSize();
        var top = screenSize.height >> 1;
        var bottom = -top;
        var right = screenSize.width >> 1;
        var left = -right;

        var outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom || bulletPos.y > top;
        if (outScreen) {
            this.node.destroy();
            return;
        }
        this.node.scale += dt;
        this.node.position = bulletPos;
    }
});

cc._RF.pop();