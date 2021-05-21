"use strict";
cc._RF.push(module, 'd7bd4mn5OlHEqvcCIyDuqj6', 'Boss2');
// Script/Actor/Boss2.js

'use strict';

cc.Class({
    extends: require('Enemy2'),

    properties: {
        speed: cc.Vec2.ZERO
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    start: function start() {},
    update: function update(dt) {
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
        this.die();
    }
});

cc._RF.pop();