"use strict";
cc._RF.push(module, '3e68fi0FU9PjKF4+95cc/F+', 'Enemy2');
// Script/Actor/Enemy2.js

'use strict';

var Enemy = require('Enemy');
cc.Class({
    extends: Enemy,

    properties: {
        interval: 3,
        attackSpeed: 1
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    onEnable: function onEnable() {
        this.schedule(this.attack, this.interval);
    },
    onDisable: function onDisable() {
        this.unschedule(this.attack);
    },
    attack: function attack() {
        var lastPos = this.node.y;
        cc.tween(this.node).to(this.attackSpeed, { y: -600 }).to(this.attackSpeed, { y: lastPos }).start();
    },
    update: function update(dt) {
        this.die();
    }
});

cc._RF.pop();