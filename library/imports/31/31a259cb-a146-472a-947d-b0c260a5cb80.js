"use strict";
cc._RF.push(module, '31a25nLoUZHKpR9sMJgpcuA', 'Boss1');
// Script/Actor/Boss1.js

'use strict';

var Enemy = require('Enemy');
cc.Class({
    extends: Enemy,

    properties: {
        speed: cc.Vec2.ZERO
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    start: function start() {},
    update: function update(dt) {
        this.die();
        var RADIUS = 45;
        var deltaSpeed = this.speed.mul(dt);
        this.node.position = this.node.position.addSelf(deltaSpeed);

        var screenSize = cc.Canvas.instance.node.getContentSize();
        var right = screenSize.width >> 1;
        var left = -right;

        var posX = this.node.position.x;
        if (posX - RADIUS < left || posX + RADIUS > right) {
            this.speed.negSelf();
        }
    }
});

cc._RF.pop();