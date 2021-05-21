"use strict";
cc._RF.push(module, '1b0f2PfbuRG2rA/6wS9nYbQ', 'Weapon');
// Script/Actor/Weapon.js

'use strict';

var Emitter = require('Emitter');
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

    start: function start() {},
    onEnable: function onEnable() {
        this.schedule(this.fire, this.interval);
    },
    onDisable: function onDisable() {
        this.unschedule(this.fire);
    },
    fire: function fire() {
        var bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        bulletPos.subSelf(cc.v2(360, 640));
        Emitter.instance.emit('fire', this.bullet, bulletPos);
    }

    // update (dt) {},

});

cc._RF.pop();