"use strict";
cc._RF.push(module, 'b9577D10BdCVJox3SkLVSsH', 'Bullet');
// Script/Actor/Bullet.js

'use strict';

var Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },
        damage: 0,
        sound: {
            default: null,
            url: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    onEnable: function onEnable() {
        cc.audioEngine.playEffect(this.sound, false);
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.node.group === 'enemy') {
            Emitter.instance.emit('remove', this);
        }
    }

    // update (dt) {},

});

cc._RF.pop();